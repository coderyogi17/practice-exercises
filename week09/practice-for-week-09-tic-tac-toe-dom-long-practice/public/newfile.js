
//start with window domcontent loaded
window.addEventListener("DOMContentLoaded", ()=>{

    //get player or restore player
    restorePlayer();

    //do same for game board status
  restoreGame();
  //do same for game message
  restoreMessage();
    //get board element to capture clicks

    let board = document.getElementsByClassName("board")[0];

    //get game status
    let gameStatus = localStorage.getItem("gameStatus"); 

    function game(event){
        if(event.target.classList.contains(col)){
            //need to get the square num to insert img
            let squareNum = event.target.getAttribute("id").split("-")[1];
            //check if squareNum is null or already has value
            //before checking get the latest board from localstorage
            //get the square of that board
            //if square is empty
            if(!getSquareNum(squareNum)){
                //then get the current player since player === square value
                let currentPlayer = getPlayer();
                //set square takes player and sets in that squarenum
                setSquare(squareNum, currentPlayer);
                //set square image in that square num
                insertMove(currentPlayer, event.target);
                //switch player
                switchPlayer();
                //set current player message
                displayPlayer();
                //check if it is a win or tie or still some null left
                let result = isOver();
                //set message based on the result returned

  if (result === "o" || result === "x") {
          setMessage("Winner: " + result.toUpperCase());
          //set game status as over
          setGameStatus(true);
        }
        //if there's a tie, display tie
        if (result === "tie") {
          setMessage("Winner: None");
          //set game status as over
          setGameStatus(true);
        }
      }
    } else if (getGameStatus() == true) {
      //otherwise if game is over or tie, remove click
      board.removeEventListener("click", game);
      //enable new Game button, disable give up
      enableNewGame();
      disableGiveUp();
    }
  }

    //to start the game we need to get the click
    board.addEventListener("click", game);
    //add reset button functionality
  let resetButton = document.getElementById("new-game");
  resetButton.addEventListener("click", () => resetGame());


  //add give up button functionality
  let giveUpButton = document.getElementById("give-up");
  giveUpButton.addEventListener("click", () => giveUp())
  //functions
 //function to alternate player
 function switchPlayer() {
    let nextPlayer = "x";
    if (localStorage.getItem("player") === "x") {
      nextPlayer = "o";
    }
    localStorage.setItem("player", nextPlayer);
  }

function isOver(){
    let board = getSquare();

    const matches = (one, two, three) => one!=null && one === two && two===three;

    for(let i = 0; i < 3 ; i ++){
        if(matches (board[i], board[i+3], board[i+6])){
            return board[i];
        }
        if(matches (board[i*3], board[i*3+1],board[i*3+2])){
            return board[i*3];
        }
    }
    diag1 = matches(board[0], board[4], board[8]);
    diag2 = matches(board[6], board[4], board[2]);

    if (diag1) {
      return board[0];
    }
    if (diag2) {
      return board[6];
    }

    //if all elements aren't null, then its a tie
    isTie = board.every((square) => square !== null);
    if (isTie) {
      return "tie";
    }

    //otherwise, game is still going
    return null;
  }
//restore game message if it exists, otherwise display current player and set message as that
function restoreMessage() {
    let message = localStorage.getItem("message");
    let messageEle = document.getElementsByClassName("message")[0];
    if (message) {
      messageEle.innerText = message;
    } else {
      displayPlayer();
      setMessage("Current Player: " + localStorage.getItem("player"));
    }
  }
     //set message
  function setMessage(message) {
    localStorage.setItem("message", message);
    let messageEle = document.getElementsByClassName("message")[0];
    messageEle.innerText = message;
  }
  //function to display current player
  function displayPlayer() {
    message = "Current Player: " + localStorage.getItem("player");
    let messageEle = document.getElementsByClassName("message")[0];
    messageEle.innerText = message;
    setMessage(message);
  }

//function to insert move
function insertMove(move, square) {
    if (move === "o") {
      square.innerHTML = `<img src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg"/>`;
    } else {
      square.innerHTML = `<img src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg"/>`;
    }
  }
//function to get current player
function getPlayer() {
    return localStorage.getItem("player");
  }
  //function to get square array
  function getSquares() {
    return JSON.parse(localStorage.getItem("board"));
  }
  //function to set square status in square array
  function setSquare(num, player) {
    let board = JSON.parse(localStorage.getItem("board"));
    board[num] = player;
    localStorage.setItem("board", JSON.stringify(board));
  }
  //getting square state
  function getSquare(num) {
    let board = JSON.parse(localStorage.getItem("board"));
    return board[num];
  }
    function getSquareNum(num){
        let board = JSON.parse(localStorage.getItem("board"));
        
            return board[num];
       
    }

    function restorePlayer(){
        let player = localStorage.getItem("player");
        if(player){
            //add HTML div to display player
            let player = document.createElement("div");
            player.classList.add("player");
            player.innerText = "Player: "+player;
            document.body.appendChild(player);
        } else {
            localStorage.setItem("player","x");
        }
              
    }

    function restoreGame(){
        //check in local storage
        let board = localStorage.getItem("board");
        if(board){
            board= JSON.parse(board);
            for (let i = 0; i < 9; i++) {
                let square = document.getElementById(`square-${i}`);
                if (board[i]) {
                  insertMove(board[i], square);
                } else {
                  square.innerHTML = ``;
                }
              }
        } else {
            localStorage.setItem("board", JSON.stringify(new Array(9).fill(null)));
        }
    }

//reset game funciton
function resetGame() {
    localStorage.setItem("player", "x");
    localStorage.setItem("board", JSON.stringify(new Array(9).fill(null)));
    localStorage.removeItem("message");
    setGameStatus(false);
    restorePlayer();
    restoreGame();
    restoreMessage();
    board.addEventListener("click", game);

    //since we are clicking on new game button, we disabled it after
    disableNewGame();
    //enable give up button
    enableGiveUp()
  }

  //set game status as over or not
  function setGameStatus(isOver) {
    localStorage.setItem("gameStatus", JSON.stringify(isOver));
  }
  //get game status
  function getGameStatus() {
    return JSON.parse(localStorage.getItem("gameStatus"));
  }

  //disable new game button
  function disableNewGame() {
    let resetButton = document.getElementById("new-game");
    resetButton.setAttribute("disabled", true);
  }

  //enable new game button
  function enableNewGame() {
    let resetButton = document.getElementById("new-game");
    resetButton.removeAttribute("disabled");
  }

  //disable give up button function
  function disableGiveUp() {
    let giveUpButton = document.getElementById("give-up");
    giveUpButton.setAttribute("disabled", true);
  }

  //enable give up button funciton

  function enableGiveUp() {
    let giveUpButton = document.getElementById("give-up");
    giveUpButton.removeAttribute("disabled");
  }
  //give up function
  function giveUp() {
    let winner = "O"
    if (getPlayer() === "o"){
      winner = "X"
    }

    setMessage("Winner: " + winner);
    //set game status as over
    setGameStatus(true);
    //disable give up, enable new game
    disableGiveUp();
    enableNewGame();
  }



});