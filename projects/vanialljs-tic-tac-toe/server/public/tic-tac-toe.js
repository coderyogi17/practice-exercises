window.addEventListener("DOMContentLoaded",()=>{
   
   
    restoreAndDisplayCurrentPlayer();

    //restore local storage
    restoreGame();
    //click give up
    const giveUpButton = document.getElementsByClassName("btn2")[0];
    giveUpButton.addEventListener("click", () => playerQuits());
    //click new game
    const newGameButton= document.getElementsByClassName("btn1")[0];
    newGameButton.addEventListener("click",() => resetGame());
   //click board square
    const board = document.getElementsByClassName("board")[0];
    board.addEventListener("click", setSquareValue);

    
  
function playerQuits(){
    //announce the other player is winner and disable quit button and enable new game button
    //call reset game
    let quitPlayer=localStorage.getItem("player");
    if(quitPlayer === 'X'){
        
        sendMessage("Player O wins!");
    } else {
        sendMessage("Player X wins!");
    }
    //disable quit button
    giveUpButton.disabled= true;
    location.reload();
    

}

function sendMessage(msg){
    let message=document.querySelector(".message");
    message.innerText= "WINNER: "+msg.toUpperCase();
    setMessage(msg);
}

function resetMessage(){
    let message=document.querySelector(".message");
    message.innerText= "";
    localStorage.setItem("message", "");
}
function setMessage(msg){
    localStorage.setItem("message", msg)
}
function restoreMessage(msg){
    let message=document.querySelector(".message");
    message.innerText= "WINNER: "+msg.toUpperCase();
}
function restoreAndDisplayCurrentPlayer(){
    
       
    let player = localStorage.getItem("player");
    if(player){
        //add HTML div to display player
        let playerElement = document.createElement("div");
        playerElement.classList.add("player");
        playerElement.innerText = "Current Player: "+player;
        document.body.appendChild(playerElement);
    } else {
        localStorage.setItem("player","X");
    }
      
}



function restoreGame(){
    //restore board
    
    let board= JSON.parse(localStorage.getItem("board"));
    if(board){
        //populate the squares
        for(let i=0; i<9;i++){
        
        let square= document.getElementById("square-"+i);
        if(board[i]!==null){
            insertMove(square,board[i]);
        }
        }
    }
    let msg= localStorage.getItem("message");
    //set it in UI
    restoreMessage(msg);
   
   
    

}

function insertMove(square, move) {
    if(move==="O"){
        square.innerHTML=`<img src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg"/>`;
    }else if (move==="X"){
        square.innerHTML=`<img src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg"/>`;
    }

}

function resetGame(){
    localStorage.setItem("gameStatus", null);
    
    localStorage.setItem("board", JSON.stringify(new Array(9).fill(null)));

    //reset header
    resetMessage();
   localStorage.setItem("player", "X");

   //remove the square values from UI
   let board= JSON.parse(localStorage.getItem("board"));
   if(board){
       //populate the squares
       for(let i=0; i<9;i++){
       
       let square= document.getElementById("square-"+i);
       if(board[i]!==null){
           //remove innerHTML from that square
           square.innerHTML="";
       }
       }
   }
   newGameButton.disabled = true;
   giveUpButton.enabled = true;
   location.reload();
  
   board.addEventListener("click", setSquareValue);

 

}

function setPlayer(player){
    localStorage.setItem("player", player);
}
function getSquares(){
    return JSON.parse(localStorage.getItem("board"));
}

function setSquare(num, player){
    //define a board key, even if it is empty value
    
    let board= JSON.parse(localStorage.getItem("board"));
    //set the player to that num
    board[num] = player;
    localStorage.setItem("board", JSON.stringify(board));
 
}

function getSquare(num){
    let board=JSON.parse(localStorage.getItem("board"));
    return board[num];
}

function setSquareValue(e){
   
    if (e.target.classList.contains("col")){
        let squareNum = e.target.getAttribute("id").split("-")[1];
   
        //need to check if it is taken or empty, just check if innerHTML is""
        if(e.target.innerHTML===""){
        let player= localStorage.getItem("player");
        if(player === "X"){
            e.target.innerHTML=`<img src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg"/>`;
            setSquare(squareNum, player);
            sendMessage(checkWin());
            player = "O";
            setPlayer(player);
            
            

        } else {

            e.target.innerHTML=`<img src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg"/>`;
            
           
            
            setSquare(squareNum, player);
            sendMessage(checkWin());
            player = "X";
            setPlayer(player);
           


        }
    
    }
    }
        
}

function checkWin(){
    //check row matches return 1,
    let board = getSquares();
    let player = localStorage.getItem("player");
        //check rows
        for (let i =0; i<3;i++){
            if(board[i*3]!==null && board[i]===board[i*3+1] && board[i+1]===board[i*3+2]){
                localStorage.setItem("gameStatus", "Win");
                newGameButton.enabled = true;
                return `Player ${player} Wins!`
            }
            if(board[i]!==null && board[i]===board[i+3]&& board[i+3]===board[i+6]){
                localStorage.setItem("gameStatus", "Win");
                newGameButton.enabled = true;
                return `Player ${player} Wins!`
            }
        }
    //check diagonal
    if(board[0]!==null && board[0]===board[4] && board[4]===board[8]){
        localStorage.setItem("gameStatus", "Win");
        newGameButton.enabled = true;
        return `Player ${player} Wins!`
    }
    if(board[3]!==null && board[3]===board[4] && board[4]===board[6]){
        localStorage.setItem("gameStatus", "Win");
        newGameButton.enabled = true;
        return `Player ${player} Wins!`
    }

      if(board.every((square) => square !== null)){
        localStorage.setItem("gameStatus", "tie");
        newGameButton.enabled = true;
        return "Tie";
      }
   
        localStorage.setItem("gameStatus", null);
        newGameButton.disabled = true;
        giveUpButton.enabled= true;
        return "None";
     

}




})

   

