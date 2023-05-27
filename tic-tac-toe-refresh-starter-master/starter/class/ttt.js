const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);
    this.cursor.setBackgroundColor();

    // Replace this with real commands
    Screen.addCommand('w', 'cursor up', this.cursor.up);
    Screen.addCommand('s', 'cursor down', this.cursor.down);
    Screen.addCommand('a', 'cursor left', this.cursor.left);
    Screen.addCommand('d', 'cursor right', this.cursor.right);
    Screen.addCommand('x', 'enter x', this.placeX);
    Screen.addCommand('o', 'enter o', this.placeO);
    this.__renderMsg("Player X plays first");
    
    
  }

  // Remove this
  __renderMsg(msg){
    Screen.setMessage(msg);
    Screen.render();
    Screen.setMessage("");
  }
  
  placeX=()=>{
    if(this.playerTurn==="0"){
      Screen.setMessage("Its player O turn");
    }
    else {
      const r= this.cursor.row;
      const c=this.cursor.col;
      if(this.grid[r][c]===" "){
      this.grid[r][c]="X";
      this.playerTurn="O";
      
      Screen.setGrid(r,c,"X");
      Screen.setTextColor(r,c,"black");
      Screen.setBackgroundColor(r,c,"white");

      const situation= TTT.checkWin(this.grid);
      if(situation){
        TTT.endGame(situation);
      } else{
        Screen.render();
      }

      } else{
        this.__renderMsg("Can not place a move on this grid!")
      }
      
    }
    
  }

  placeO=()=>{
    if(this.playerTurn==="X"){
      Screen.setMessage("Its player X turn");
    }
    else {
      const r= this.cursor.row;
      const c=this.cursor.col;
      if(this.grid[r][c]===" "){
      this.grid[r][c]="O";
      this.playerTurn="X";
      
      Screen.setGrid(r,c,"O");
      Screen.setTextColor(r,c,"black");
      Screen.setBackgroundColor(r,c,"white");

      const situation= TTT.checkWin(this.grid);
      if(situation){
        TTT.endGame(situation);
      } else{
        Screen.render();
      }

      } else{
        this.__renderMsg("Can not place a move on this grid!")
      }
      
    }
    
  }

  static checkWin(grid) {

    // Return 'X' if player X wins or return 'O' if player O wins
    for (let i = 0; i < grid.length; i++) {
      if(grid[i][0]!==" "){
      if(grid[i][0]===grid[i][1]&&grid[i][1]===grid[i][2]){
        return grid[i][0];
      }
    }
    }
    for(let j =0; j<grid.length;j++){
      if(grid[0][j]!==" "){
      if(grid[0][j]===grid[1][j]&&grid[1][j]===grid[2][j]){
        return grid[0][j];
      }
    }
    }
    
      if(grid[1][1]!==" "){
      if((grid[0][0]===grid[1][1]&& grid[1][1]===grid[2][2])||(grid[0][2]===grid[1][1]&& grid[1][1]===grid[2][0])){
      return grid[1][1];
      }
      
    }
   
    
    for(let l=0; l<grid.length;l++){
      let subArr=grid[l];
      for(let m=0; m<subArr.length;m++){
       if(grid[l][m]===" "){
        return false;
       }
      }
    }
    return 'T';
  
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

module.exports = TTT;
