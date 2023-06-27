const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    //first element select position
    this.firstEleRow = 0;
    this.firstEleCol = 0;
    
    //second element select position
    this.secondEleRow = 0;
    this.secondEleCol = 1;


    //element selector mode
    this.mode = 0;

    this.gridColor = 'black';
    this.firstColor = 'yellow';
    this.secondColor = 'blue';
    this.selectionColor();

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor(row, col,color) {
    Screen.setBackgroundColor(row, col, color);
  }

  up() {
    // Move cursor up
    if(this.row > 0){
      this.resetBackgroundColor();
      this.selectionColor();

      this.row --;
      this.colorMode();
    }
  }

  down() {
    // Move cursor down
    
    if(this.row < this.numRows-1){
      this.resetBackgroundColor();
      this.selectionColor();
      this.row++;
      this.colorMode();
    }
  }

  left() {
    // Move cursor left
    if(this.col > 0){
      this.resetBackgroundColor();
      this.selectionColor();
      this.col --;
      this.colorMode();
    }
  }

  right() {
    // Move cursor right
    if(this.col < this.numCols -1){
      this.resetBackgroundColor();
      this.selectionColor();
      this.col ++;
      this.colorMode();
    }
  }

  //select position for an element, and switches to selecting a position for the other element once done
  select(){
    //when making a selection, resets old selection's background to black
    this.resetOldSelection();
    if(this.mode === 0){
      this.firstEleCol = this.col;
      this.firstEleRow = this.row;
      this.mode = 1;
    } else{
      this.secondEleCol = this.col;
      this.secondEleRow = this.row;
      this.mode = 0;
    }
    this.colorMode();
    this.selectionColor();
  }


  //reset selection
  refresh(){
    this.resetBothOldSelection();
    this.resetCursor();

    this.firstEleCol = 0;
    this.firstEleRow = 0;
    this.secondEleCol = 1;
    this.secondEleRow = 0;
    this.col = 0;
    this.row = 0;
    this.mode = 0;
    this.colorMode();
    this.selectionColor();
  }

  //color indicating selection mode

  colorMode(){
  if(this.mode === 0){
    this.setBackgroundColor(this.row, this.col, this.firstColor);
  } else{
    this.setBackgroundColor(this.row, this.col, this.secondColor);
  }
  }
  //color indicating current selection of elements
  selectionColor(){
  this.setBackgroundColor(this.firstEleRow, this.firstEleCol, 'red');
  this.setBackgroundColor(this.secondEleRow, this.secondEleCol, 'green')
  }
  resetOldSelection(){
  if(this.mode === 0){
    this.setBackgroundColor(this.firstEleRow, this.firstEleCol, 'black');
  } else{
    this.setBackgroundColor(this.secondEleRow, this.secondEleCol, 'black');
  }
  }

    resetBothOldSelection(){
  this.setBackgroundColor(this.firstEleRow, this.firstEleCol, 'black');
  this.setBackgroundColor(this.secondEleRow, this.secondEleCol, 'black');
  }

  resetCursor(){
  this.setBackgroundColor(this.row, this.col, 'black');
  }




}


module.exports = Cursor;