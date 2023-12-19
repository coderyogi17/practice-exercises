// Your code here
window.addEventListener("DOMContentLoaded", () => {
    //restore current player or initalize
    restorePlayer();
    //do same for game board status
    restoreGame();
    //do same for game message
    restoreMessage();
    //use board to host click listener
    let board = document.getElementsByClassName("board")[0];
    //get game status
    let gameStatus = localStorage.getItem("gameStatus");
    //if it doesn't exist, set it to false
    if (!gameStatus) {
      setGameStatus(false);
    }
  
    //if game not over, disabled new game and enable give up, otherwise enable new game and disable give up
    gameStatus = getGameStatus();
    if (!gameStatus) {
      disableNewGame();
      enableGiveUp()
    } else {
      enableNewGame();
      disableGiveUp()
    }
  
    //game interaction click handler
    function game(event) {
      //if it is a square and game is not over
      if (event.target.classList.contains("col") && getGameStatus() == false) {
        //get square number
        let squareNum = Number(event.target.getAttribute("id").split("-")[1]);
        //if square is empty
        if (!getSquare(squareNum)) {
          let currentPlayer = getPlayer();
          //set square logic
          setSquare(squareNum, currentPlayer);
          //set square image
          insertMove(currentPlayer, event.target);
          //switch player
          switchPlayer();
          //set current player message
          displayPlayer();
          //check game status
          let result = isOver();
          //if game over, remove click listener
          //if either of the players won, displaynpm run test-1
  
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
  
    //set click handler
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
  
    //function to restore current player, otherwise initialize
    function restorePlayer() {
      let player = localStorage.getItem("player");
      if (player) {
        //insert logic later for displaying player
      } else {
        localStorage.setItem("player", "x");
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
    //restoring board if game exists in local storage, otherwise initalize
    function restoreGame() {
      let board = localStorage.getItem("board");
      if (board) {
        board = JSON.parse(board);
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
    //inserting a x or o into square element
    function insertMove(move, square) {
      if (move === "o") {
        square.innerHTML = `<img src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg"/>`;
      } else {
        square.innerHTML = `<img src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg"/>`;
      }
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
  
    //function for checking if game over, return winner if win, "tie" if tie, null if not over
    function isOver() {
      let board = getSquares();
  
      //function for comparing three and if they're not null
      const matches = (one, two, three) =>
        one !== null && one === two && two === three;
  
      //check rows and columns
      for (let i = 0; i < 3; i++) {
        rowResult = matches(board[i * 3], board[i * 3 + 1], board[i * 3 + 2]);
        colResult = matches(board[i], board[3 + i], board[6 + i]);
  
        //if match, return it
        if (rowResult) {
          return board[i * 3];
        }
        if (colResult) {
          return board[i];
        }
      }
  
      //check diagonals, return if matches
  
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