const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Your code here
  console.log(`${req.method} ${req.url}`);
  let reqBody = '';
    req.on('data', (data) => {
      reqBody += data;
      console.log(reqBody);
    });
  
    req.on('end', () => {
   
       if(req.method=== 'GET' && req.url ==='/'){
        const htmlPage = fs.readFileSync("./index.html", 'utf-8');
       
            
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        
        return res.end(htmlPage);
       }
     
       if (
        req.method === "GET" &&
        req.url.split("/").length === 4 &&
        req.url.split("/")[1] === "static" &&
        req.url.split("/")[2] === "images"
        
      ) {
        const imageUrl= req.url.split("/")[3];
        res.statusCode = 302;
        res.setHeader("Content-Type", "image/jpeg");
        const asset= fs.readFileSync(`./assets/images/${imageUrl}`);
        return res.end(asset);
       
      }

      if (
        req.method === "GET" &&
        req.url.split("/").length === 4 &&
        req.url.split("/")[1] === "static" &&
        req.url.split("/")[2] === "css"
      ) {
        res.statusCode = 302;
        res.setHeader("Content-Type", "text/css");
        const asset1= fs.readFileSync(`./assets/css/${req.url.split("/")[3]}` , 'utf-8');
        return res.end(asset1);
      }
    });

});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));