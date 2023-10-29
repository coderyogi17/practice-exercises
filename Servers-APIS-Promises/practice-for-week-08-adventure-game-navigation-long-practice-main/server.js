const http = require('http');
const fs = require('fs');

const { Player } = require('./game/class/player');
const { World } = require('./game/class/world');

const worldData = require('./game/data/basic-world-data');
const basicWorldData = require('./game/data/basic-world-data');

let player;
let world = new World();
world.loadWorld(worldData);

const server = http.createServer((req, res) => {

  /* ============== ASSEMBLE THE REQUEST BODY AS A STRING =============== */
  let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => { // After the assembly of the request body is finished
    /* ==================== PARSE THE REQUEST BODY ====================== */
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
    }

    /* ======================== ROUTE HANDLERS ========================== */
    //let splitUrl = req.url.split("/");
    // Phase 1: GET /
    if(req.method='GET' && req.url==='/'){

      let newPlayerCreation = fs.readFileSync("./views/new-player.html", "utf-8");

      newPlayerCreation = newPlayerCreation.replace(
        /#{availableRooms}/,
        world.availableRoomsToString()
      );

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      return res.end(newPlayerCreation);
    }

    // Phase 2: POST /player
    
    if(req.method='POST' && req.url==='/player'){
      let roomID= req.body.roomId;
      let room = world.rooms[roomID];
      let name = req.body.name;

    
     player= new Player(name, room);

     //console.log(player);
      
      res.statusCode = 302;
      res.setHeader('Location', `/rooms/${roomID}`);
      res.setHeader('Method','GET');
      
      return res.end();
    }

    // Phase 3: GET /rooms/:roomId
    //step 1 get the room id from url
   
    if(!player){
    
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    }
    if (
      //req.method === 'GET' &&
      req.url.split('/').length === 3 &&
      req.url.startsWith('/rooms/')
    ) {
     
      const roomId = Number(req.url.split('/')[2]);
      if (world.rooms[roomId] !== player.currentRoom) {
        res.statusCode = 302;
        res.setHeader('location', 'rooms/'+player.currentRoom.id);
        return res.end();
      }

      //const currRoom = world.rooms[roomId];
      let currentRoomPage = fs
        .readFileSync("./views/room.html", "utf-8")
        .replace(/#{roomName}/g, world.rooms[roomId].name)
        .replace(/#{description}/g, world.rooms[roomId].description)
        .replace(/#{inventory}/g, player.inventoryToString())
        .replace(/#{roomItems}/g, world.rooms[roomId].itemsToString())
        .replace(/#{exits}/g, world.rooms[roomId].exitsToString());

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      //res.body=currentRoomPage;
      return res.end(currentRoomPage);
    }
    // Phase 4: GET /rooms/:roomId/:direction

    if (
      //req.method === 'GET' &&
      req.url.split('/').length === 4 &&
      req.url.startsWith('/rooms/')
    ) {
     
      const roomId = Number(req.url.split('/')[2]);
      
      let room = world.rooms[roomId];
      if (room !== player.currentRoom) {
        res.statusCode = 302;
        res.setHeader('location', 'rooms/'+player.currentRoom.id);
        return res.end();
      }
      //get the directions of that room and compare
     // console.log(req.url.split('/')[3]);
      const direction = req.url.split('/')[3].substring(0,1);
      //console.log(direction);
      //player.move(direction);

      try {
        //console.log(player);
        player.move(direction);
        //console.log(player);
        res.statusCode = 302;
        res.setHeader('Location', `/rooms/${player.currentRoom.id}`);
        return res.end();
      } catch (error) {
        res.statusCode = 200;
        res.setHeader("Location", `/rooms/${player.currentRoom.id}`);
        return res.end();
      }
  
    }
 

    // Phase 5: POST /items/:itemId/:action

    if (
      //req.method === "POST" &&
      req.url.length === 4 &&
      req.url[1] === "items"
    ) {
      let itemId = req.url[2];
      let item;

      let action = req.url[3];

      let errorPage = fs
        .readFileSync("./views/error.html", "utf-8")
        .replace(/#{roomId}/g, player.currentRoom.id);

      switch (action) {
        case "drop":
          try {
            player.dropItem(itemId);
          } catch (error) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            errorPage = errorPage.replace(
              /#{errorMessage}/g,
              "You can't drop this item, it either doesn't exist or isn't in your inventory."
            );
            return res.end(errorPage);
          }
          break;
        case "eat":
          try {
            player.eatItem(itemId);
          } catch (error) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            errorPage = errorPage.replace(
              /#{errorMessage}/g,
              "You can't eat this item, it either doesn't exist, isn't in your inventory, or you are not able to eat it."
            );
            return res.end(errorPage);
          }
          break;
        case "take":
          try {
            player.takeItem(itemId);
          } catch (error) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            errorPage = errorPage.replace(
              /#{errorMessage}/g,
              "You can't take this item, it either doesn't exist or isn't in this room."
            );
            return res.end(errorPage);
          }
          break;
        default:
          break;
      }

      //if no errors redirect back to current room
      res.setHeader("Location", "/rooms/" + player.currentRoom.id);
      res.statusCode = 302;
      return res.end();
    }


        // //get the direction available in currentRoom, to pass to move() to redirect player to next available room on success
        // let currExit = currentRoom._getExits();
        // console.log(currExit);
        // if(currExit === 'n'){
        //   direction = 'North';
        // }
        // if(currExit === 's'){
        //   direction = 'South';
        // }
        // if(currExit === 'e'){
        //   direction = 'East';
        // }
        // if(currExit === 'w'){
        //   direction = 'West';
        // }
        // try {
        //   //console.log(player);
        //   if(currExit.length <= 1){
        //   currentRoom = player.move(direction);
        //   } 
        //   //console.log(player);
        //   res.statusCode = 302;
        //   res.setHeader('Location', `/rooms/${player.currentRoom.id}`);
        //   return res.end();
        // } catch (error) {
        //   res.statusCode = 200;
        //   res.setHeader("Location", `/rooms/${player.currentRoom.id}`);
        //   return res.end();
        // }

    

    
  

  // Phase 6: Redirect if no matching route handlers
  res.setHeader("Location", "/rooms/" + player.currentRoom.id);
  res.statusCode = 302;
  return res.end();
});
});



const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));