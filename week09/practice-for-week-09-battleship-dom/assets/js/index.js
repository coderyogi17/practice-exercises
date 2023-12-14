import ComputerPlayer from "./ComputerPlayer.js";
import HumanPlayer from "./HumanPlayer.js";

let human = new HumanPlayer();
let computer = new ComputerPlayer();

//add game message below title
let gameMessage = document.createElement("h2");
gameMessage.classList.add("message");
document.body.appendChild(gameMessage);

export function createGame() {
  //function for creating board
  function createBoard(player) {
    let board = document.createElement("div");
    board.classList.add("gameboard");

    for (let row in player.board.grid) {
      //create a row
      let rowDiv = document.createElement("div");
      rowDiv.classList.add("row");

      //create cols and add it to the row
      for (let col in player.board.grid[row]) {
        let colDiv = document.createElement("div");
        //add classes for styling the col and for when its untouched
        colDiv.classList.add("col");
        colDiv.classList.add("untouched");
        colDiv.setAttribute("data-row", row);
        colDiv.setAttribute("data-col", col);
        rowDiv.appendChild(colDiv);
      }
      //add the row to the board
      board.appendChild(rowDiv);
    }

    return board;
  }

  //create the boards
  let humanBoard = createBoard(human);
  humanBoard.classList.add("humanBoard");
  let computerBoard = createBoard(computer);
  computerBoard.classList.add("computerBoard");
  //create their containers
  let humanBoardContainer = document.createElement("div");
  let computerBoardContainer = document.createElement("div");
  //create their titles
  let humanTitle = document.createElement("h2");
  let computerTitle = document.createElement("h2");
  humanTitle.innerText = "Player";
  computerTitle.innerText = "Computer";
  //add the titles and boards to the container
  humanBoardContainer.appendChild(humanTitle);
  humanBoardContainer.appendChild(humanBoard);
  computerBoardContainer.appendChild(computerTitle);
  computerBoardContainer.appendChild(computerBoard);
  humanBoardContainer.classList.add("humanBoardContainer");
  computerBoardContainer.classList.add("computerBoardContainer");

  //add the containers to the document
  document.body.appendChild(humanBoardContainer);
  document.body.appendChild(computerBoardContainer);

  //attach listener to human board to handle square clicks
  humanBoard.addEventListener("click", function game(event) {
    event.stopPropagation();
    let target = event.target;
    //check if human target is a square
    if (target.classList.contains("col")) {
      let row = Number(target.dataset.row);
      
      let col = Number(target.dataset.col);
    

      //let the human make a hit
      //see if that was an invalid move set an error message
      //otherwise continue on (make sure to erase error)
    //   let result = human.isValid(row, col);

    //   if (!result) {
    //     gameMessage.innerText = "Invalid move";
    //     return;
    //   }

      //at this point this move is valid
      //erase error
     // gameMessage.innerText = "";
      //make the move
      let moveResult = human.makeMove(row, col);
      //style square based on result
      if (moveResult) {
        target.classList.add("success");
        target.innerText = moveResult;
        } else {
        target.classList.add("failure");
      }

      //if you won, set message and remove click listener and cursor hovering
      if (human.hasWon()) {
        gameMessage.innerText = "YOU WON!";
        //remove untouched from all squares
        let squares = document.getElementsByClassName("col");
        for (let square of squares) {
          square.classList.remove("untouched");
        }
        //remove gameboard listener
        humanBoard.removeEventListener("click", game);
      }

      //continue on to make computer move

      let computerResult = computer.makeMove();

      if (computerResult) {
        //get the result of the computer move and coords
        let {
          result,
          coord: [row, col],
        } = computerResult;

        //get the square
        let computerSquare = document.body.querySelector(
          `.computerBoard div[data-row="${row}"][data-col="${col}"]`
        );
        if (result) {
          //if valid result style it success
          computerSquare.classList.add("success");
          computerSquare.innerText = result;
        } else {
          //otherwise style it failure
          computerSquare.classList.add("failure");
        }
      }

      //check if computer won, if so set message, end game
      if (computer.hasWon()) {
        gameMessage.innerText = "YOU SUCK!";
        //remove untouched from all squares
        let squares = document.getElementsByClassName("col");
        for (let square of squares) {
          square.classList.remove("untouched");
        }
        //remove gameboard listener
        humanBoard.removeEventListener("click", game);
      }
    }
  });
}

//attach reset button
let reset = document.createElement("button");
reset.innerText = "RESET";
reset.addEventListener("click", () => {
  //remove containers
  let computerBoardContainer = document.getElementsByClassName(
    "computerBoardContainer"
  )[0];
  let humanBoardContainer = document.getElementsByClassName(
    "humanBoardContainer"
  )[0];
  computerBoardContainer.remove();
  humanBoardContainer.remove();
  //reset boards
  human = new HumanPlayer();
  computer = new ComputerPlayer();
  //create game again
  createGame();
});
document.body.appendChild(reset);
createGame();

// Get the text field that we're going to track
let field = document.getElementById("field");

// See if we have an autosave value
// (this will only happen if the page is accidentally refreshed)
if (sessionStorage.getItem("autosave")) {
  // Restore the contents of the text field
  field.value = sessionStorage.getItem("autosave");
}

// Listen for changes in the text field
field.addEventListener("change", function () {
  // And save the results into the session storage object
  sessionStorage.setItem("autosave", field.value);
});
if (!localStorage.getItem("bgcolor")) {
    populateStorage();
  }
  setStyles();
  
  const populateStorage = () => {
    localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
    localStorage.setItem("font", document.getElementById("font").value);
    localStorage.setItem("image", document.getElementById("image").value);
  };
  
  const setStyles = () => {
    var currentColor = localStorage.getItem("bgcolor");
    var currentFont = localStorage.getItem("font");
    var currentImage = localStorage.getItem("image");
  
    document.getElementById("bgcolor").value = currentColor;
    document.getElementById("font").value = currentFont;
    document.getElementById("image").value = currentImage;
  
    htmlElem.style.backgroundColor = "#" + currentColor;
    pElem.style.fontFamily = currentFont;
    imgElem.setAttribute("src", currentImage);
  };