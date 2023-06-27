const Screen = require("./screen");
const Cursor = require("./cursor");

class Bejeweled {

  constructor() {

    this.playerTurn = "O";
    this.grid = [];
    this.cursor = new Cursor(8, 8);

    Screen.initialize(8, 8);
    Screen.setGridlines(false);

    //--------------create grid-----------------------
    let emojis = ['🍊', '🥝', '🍇', '🍓', '🥥', '🍋'];
    for (let i = 0; i < 8; i++) {
      this.grid.push([]);
      for (let k = 0; k < 8; k++) {
        let randomEmoji = emojis[Math.floor(Math.random() * 6)];
        this.grid[i].push(randomEmoji);
        Screen.setGrid(i, k, randomEmoji);
      }
    }
    while (Bejeweled.checkForMatches(this.grid).length > 0) {
      this.fallDown();
    }
    this.numCombos = 0;
    this.numMatches = 0;
    this.updateScreen()
    //---------------------------------------------------
    Screen.addCommand('up', 'moves cursor to up', this.cursor.up.bind(this.cursor))
    Screen.addCommand('left', 'moves cursor to left', this.cursor.left.bind(this.cursor))
    Screen.addCommand('down', 'moves cursor to down', this.cursor.down.bind(this.cursor))
    Screen.addCommand('right', 'moves cursor to right', this.cursor.right.bind(this.cursor))
    Screen.addCommand('return', 'selects current element', this.cursor.select.bind(this.cursor))
    Screen.addCommand('r', 'resets selection', this.cursor.refresh.bind(this.cursor))
    Screen.addCommand('s', 'attempts to make a swap', this.makeSwap.bind(this))
    Screen.addCommand('v', "stuck? use this to get a list of valid moves", this.printMoves.bind(this))
    Screen.addCommand('q', 'quit the game', this.quit.bind(this) )
    this.cursor.colorMode();
    Screen.render();
  }


  //---------------checks for matches, returns array of positions of matches------------------//
  static checkForMatches(grid) {
    let matches = [];
    //check horizontally
    grid.forEach((ele, row) => {
      for (let i = 0; i < ele.length - 2; i++) {
        if (ele[i] !== "❌" && Bejeweled.checkThree(ele[i], ele[i + 1], ele[i + 2])) {
          matches.push([[row, i], [row, i + 1], [row, i + 2]]);
        }
      }
    });
    //check vertically
    //columns
    for (let i = 0; i < grid[0].length; i++) {
      //rows
      for (let k = 0; k < grid.length - 2; k++) {
        if (grid[k][i] !== "❌" && Bejeweled.checkThree(grid[k][i], grid[k + 1][i], grid[k + 2][i])) {
          matches.push([[k, i], [k + 1, i], [k + 2, i]])
        }
      }
    }
    return matches;
  }
  //----------------------------------------------------------------------------------------------//


  //-----Helper Function to compare three different cells (doesn't count if they're empty) ------- //
  static checkThree(cell1, cell2, cell3) {

    return cell1 !== "❌" && cell1 === cell2 && cell2 === cell3;
  }
  //------------------------------------------------------------//
  //----Helper function to get the smallest number --------------//

  static smallest(num1, num2, num3) {
    if (num1 <= num2 && num1 <= num3) {
      return num1;
    } else if (num2 <= num1 && num2 <= num3) {
      return num2;
    }
    return num3;
  }
  //--------------------------------------------------------------//

  //-----------Function to check if a swap is valid---------------------------------//
  static swapCheck(grid, firstEleRow, firstEleCol, secondEleRow, secondEleCol) {
    //check if the two elements are within bounds and adjacent to each other
    if (!Bejeweled.adjacentAndWithinBounds(firstEleRow, firstEleCol, secondEleRow, secondEleCol)) {
      return false;
    }

    //if the positions are the same, return false

    if (firstEleCol === secondEleCol && firstEleRow === secondEleRow) {
      return false;
    }


    //create copy of grid
    let tempGrid = grid.map(row => row.slice())
    // swap elements in tempGrid
    let firstEleTemp = tempGrid[firstEleRow][firstEleCol];
    let secondEleTemp = tempGrid[secondEleRow][secondEleCol];
    tempGrid[firstEleRow][firstEleCol] = secondEleTemp;
    tempGrid[secondEleRow][secondEleCol] = firstEleTemp;
    //create list of matches resulting from swap
    let matches = Bejeweled.checkForMatches(tempGrid);


    //see if there's at least one match that has the first or second position within it
    let matchExists = matches.some(match => {

      let matchString = match.map(ele => `[${ele.toString()}]`);
      matchString = `[${matchString.toString()}]`

      return matchString.includes(`[${[firstEleRow, firstEleCol].toString()}]`) || matchString.includes(`[${[secondEleRow, secondEleCol].toString()}]`)
    })
    return matchExists;


  }
  //---------------------------------------------------------------------------------------//
  //--------------helper function for determining if two positions are within grid bounds and adjacent---------------------------------------//

  static adjacentAndWithinBounds(firstEleRow, firstEleCol, secondEleRow, secondEleCol) {
    //checks if input position is within bounds and the two positions are adjacent to each other (no diagonal)
    if (firstEleCol >= 0 && firstEleRow >= 0 && secondEleCol >= 0 && secondEleRow >= 0 && firstEleCol < 8 && firstEleRow < 8 && secondEleRow < 8 && secondEleCol < 8) {
      return (
        //if the elements are on the same row and next to each other
        (((firstEleCol === secondEleCol - 1) || (firstEleCol === secondEleCol + 1)) && (firstEleRow === secondEleRow))
        ||
        //or they are on the same column and on adjacent rows
        (((firstEleRow === secondEleRow - 1) || (firstEleRow === secondEleRow + 1)) && (firstEleCol === secondEleCol))
      )
    }

    //if not within bounds
    return false;
  }
  //---------------------------------------------------------------------------------------------------------------------------------------//


  //------------------------function for moving elements downwards to fill in spaces-------------------------------------------------------//
  //considers matches, deletes corresponding elements and makes other elements fill in the gap, if necessary
  fallDown() {
    //deletes matches and continues the process of filling in the space until there are no more matches
    if (Bejeweled.checkForMatches(this.grid).length > 0) {
      let firstMatch = Bejeweled.checkForMatches(this.grid)[0];
      let firstEleRow = firstMatch[0][0];
      let firstEleCol = firstMatch[0][1];
      let secondEleRow = firstMatch[1][0];
      let secondEleCol = firstMatch[1][1];
      let thirdEleRow = firstMatch[2][0];
      let thirdEleCol = firstMatch[2][1];


      // if the match is on the same row
      if (Bejeweled.checkThree(firstEleRow, secondEleRow, thirdEleRow)) {
        for (let i = firstEleRow - 1; i >= 0; i--) {
          //starting with the match of the row, replace the three elements of the current row with the corresponding elements above this row
          this.grid[i + 1][firstEleCol] = this.grid[i][firstEleCol];
          this.grid[i + 1][secondEleCol] = this.grid[i][secondEleCol];
          this.grid[i + 1][thirdEleCol] = this.grid[i][thirdEleCol];
        }
        //empty top row
        this.grid[0][firstEleCol] = "❌";
        this.grid[0][secondEleCol] = "❌";
        this.grid[0][thirdEleCol] = "❌";
      } else { //if they're on the same column
        for (let i = Bejeweled.smallest(firstEleRow, secondEleRow, thirdEleRow) - 1; i >= 0; i--) {
          //starting with the first element above the matching elements, shift it down three spaces
          this.grid[i + 3][firstEleCol] = this.grid[i][firstEleCol];
        }
        //empty the top three elements in the column
        this.grid[0][firstEleCol] = "❌";
        this.grid[1][firstEleCol] = "❌";
        this.grid[2][firstEleCol] = "❌";
      }
    }
  }
  //-------------------------------------------------------------------------------------------------------------------------------------------------//

  //-----------------------------------function for making a swap in the grid------------------------------------------------------------------//
  swap = (firstEleRow, firstEleCol, secondEleRow, secondEleCol) => {
    //if not a valid swap, return false
    if (!Bejeweled.swapCheck(this.grid, firstEleRow, firstEleCol, secondEleRow, secondEleCol)) {
      return false;
    }

    //swap
    let firstEleTemp = this.grid[firstEleRow][firstEleCol];
    let secondEleTemp = this.grid[secondEleRow][secondEleCol];

    this.grid[firstEleRow][firstEleCol] = secondEleTemp;
    this.grid[secondEleRow][secondEleCol] = firstEleTemp;
    this.numMatches++;
    //make elements fall down
    this.fallDown();
    //after first swap, if there are still matches, keep calling combos
    while (Bejeweled.checkForMatches(this.grid).length > 0) {
      this.combos();
      this.numCombos++;
    }

    this.updateScreen()

    return true;


  }
  //-------------------------------------------------------------------------------------------------------------------------------------//

  //----------------------function that basically just calls fallDown to remove matches and fill in spaces, meant to only be called when there are combos ---------------------------//
  combos() {
    this.fallDown();
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

  //-------------------------------------Gets a list of valid swaps to make -------------------------------------------------------------------------------------//
  validMoves() {
    let moves = [];
    //iterate through rows
    for (let row = 0; row < 8; row++) {

      let topBorder = row === 0;
      let bottomBorder = row === 7;
      //iterate through columns
      for (let col = 0; col < 8; col++) {
        let leftBorder = col === 0;
        let rightBorder = col === 7;
        //if the current element is not on the top or left border,  just look up and left. no need to look bottom and left, since for the most part that would be repeating the same swap comparison
        if (!topBorder && !leftBorder) {
          //up
          if (Bejeweled.swapCheck(this.grid, row, col, row - 1, col)) {
            moves.push([[row, col], [row - 1, col]]);
          }

          //left
          if (Bejeweled.swapCheck(this.grid, row, col, row, col - 1)) {
            moves.push([[row, col], [row, col - 1]]);
          }
        }

        //otherwise if on the left border and not on top border, just look up
        else if (!topBorder && leftBorder) {
          //up
          if (Bejeweled.swapCheck(this.grid, row, col, row - 1, col)) {
            moves.push([[row, col], [row - 1, col]]);
          }
        }

        //otherwise if on top border and not on left border, look left
        else if (topBorder) {
          //left
          if (Bejeweled.swapCheck(this.grid, row, col, row, col - 1)) {
            moves.push([[row, col], [row, col - 1]]);
          }
        }
      }

    }
    return moves;
  }
  //-------------------------------------------------------------------------------------------------------------//

  //-----------------------------Makes Swap with cursor-----------------------------//
  makeSwap() {
    this.swap(this.cursor.firstEleRow, this.cursor.firstEleCol, this.cursor.secondEleRow, this.cursor.secondEleCol);
  }

  //-----------------------------------------------------------------------------------//

  //-----------------------------updates Screen -------------------------------//
  updateScreen() {
    for (let row in this.grid) {
      for (let col in this.grid[row]) {
        Screen.setGrid(row, col, this.grid[row][col]);
      }
    }
    let matchnum = this.numMatches;
    let combosnum = this.numCombos;
    Screen.setMessage(`Number of Matches: ${matchnum}\nNumber of Combos: ${combosnum}`)
    Screen.render()
    if(this.validMoves().length===0){
      Screen.setQuitMessage(`There are no more valid moves left. You ended the game with ${this.numMatches} matches and ${this.numCombos} combos. Good job!`);
      Screen.quit();
    }
  } 
  //-----------------------------------------------------------------------------------//
//-----------------------set screen message to moves---------------------------------//
printMoves(){
  Screen.setMessage(this.validMoves());
}
//-------------------------------------------------------//

//--------quit function -------///
quit(){
  Screen.setQuitMessage(`There are no more valid moves left. You ended the game with ${this.numMatches} matches and ${this.numCombos} combos. Good job!`);
  Screen.quit();
}
///---------------------------//
}
 

module.exports = Bejeweled;