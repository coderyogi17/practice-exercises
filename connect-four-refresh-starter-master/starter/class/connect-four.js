const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ', ' ', ' ', ' ', ' ', ' ', ' '],
                 [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                 [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                 [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                 [' ', ' ', ' ', ' ', ' ', ' ', ' '],
                 [' ', ' ', ' ', ' ', ' ', ' ', ' ']]

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('w', 'move up', this.cursor.up);
    Screen.addCommand('s', 'move down', this.cursor.down);
    Screen.addCommand('a', 'move left', this.cursor.left);
    Screen.addCommand('d', 'move up', this.cursor.right);
    Screen.addCommand('x', 'place x', this.placeX);
    Screen.addCommand('o', 'place o', this.placeO);

    this.cursor.setBackgroundColor();

    this.__renderMsg("Its player X turn");
  }

  __renderMsg(msg) {
    Screen.setMessage(msg);
    Screen.render();
    Screen.setMessage(msg);

  }

  // get the current cursor location, then check if that space is empty
  //if empty place "X", reset the backgroud color and cursor color
  //check if by placing the "X", did the player X win
  //if nothing can be placed, then say play cannot be made
  static placeX() {
    if (this.playerTurn === "O") {
      this.__renderMsg("It's player O turn");
    } else {
      const r = this.cursor.row;
      const c = this.cursor.col;
      if (this.grid === " ") {

        this.playerTurn = "O";
        this.grid[r][c] = "X";
        //needs to set X on the screen also, in addition to grid variable
        Screen.setGrid(r, c, "X");
        Screen.setTextColor(r, c, "white");
        const situation = this.checkWin(this.grid);
        if (situation) {
          this.__renderMsg("Player X wins!")
        }
      } else {
        this.__renderMsg("Play cannot be made");

      }
    }
  }

  static placeO() {
    if (this.playerTurn === "X") {
      this.__renderMsg("It's player X turn");
    } else {
      const r = this.cursor.row;
      const c = this.cursor.col;
      if (this.grid[r][c] === " ") {
        this.playerTurn = "X";
        this.grid[r][c] = "O";
        Screen.setGrid(r, c, "O");
        Screen.setBackgroundColor(r, c, "white");
        const situation = this.checkWin(this.grid);
        if (situation) {
          this.__renderMsg("Player O wins!!")
          this.endGame("O");
        }
      } else {
        this.__renderMsg("Move cannot be placed");
      }
    }
  }

  static checkWin(grid) {

    // Return 'X' if player X wins

    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = ConnectFour;
