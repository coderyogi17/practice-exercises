const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  up = () => {
    // Move cursor up
    if (this.row > 0) {
      this.resetBackgroundColor();
      this.row--;
      // console.log(this.row, this.col);
      this.setBackgroundColor();
      Screen.render();//Screen.render() will update the display. This must be called anytime the grid or messages change.

    } 

  };

  down = () => {
    // Move cursor down
    if (this.row < 2) {
      this.resetBackgroundColor();
      this.row++;
      // console.log(this.row, this.col);
      this.setBackgroundColor();
      Screen.render();
    }
  }


  left = () => {
    // Move cursor left
    if (this.col > 0) {
      this.resetBackgroundColor();
      this.col--;
      // console.log(this.row, this.col);
      this.setBackgroundColor();
      Screen.render();
    }
  }

  right = () => {
    // Move cursor right
    if (this.col < 2) {
      this.resetBackgroundColor();
      this.col++;
      // console.log(this.row, this.col);
      this.setBackgroundColor();
      Screen.render();
    }
  }

}


module.exports = Cursor;
