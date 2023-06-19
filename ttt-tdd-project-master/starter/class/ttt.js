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

    // Replace this with real commands
    Screen.addCommand('t', 'test command (remove)', TTT.testCommand);

    Screen.render();
  }

  // Remove this
  static testCommand() {
    console.log("TEST COMMAND");
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
