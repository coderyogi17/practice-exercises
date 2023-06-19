const cursor=require("./cursor");
const TTT=require("./ttt")

class ComputerPlayer {



  // static getValidMoves(grid) {
  //   // Your code here
  //   let validMoves=[];

  //   grid.forEach((line) => {
  //     let columnVal=[];
  //     line.forEach((row,col)=>{
       

  //       if(grid[row][col]=== ' '){
  //         columnVal.push({row:spot,col:col})
  //       }
  //     })
      
  //   });

  //     validMoves.push(columnVal);
  // }
  static getValidMoves(grid) {
    // Your code here
    //array to store valid moves
    let validMoves = [];
    //iterate through rows
    for (let rows in grid) {
      //iterate throw columns
      for (let cols in grid) {
        //if this current spot is empty
        if (grid[rows][cols] === ' ') {
          //create an object containing the location of this spot, and
          //push it to the array of valid move
          let obj = { row: Number(rows), col: Number(cols) }
          validMoves.push(obj);
        }
      }
    }
    return validMoves;
  }

  static randomMove(grid) {

    // Your code here
    let possibleMoves= ComputerPlayer.getValidMoves(grid);
    let randomPosition= Math.floor(Math.random()*possibleMoves.length);
    return possibleMoves[randomPosition];

  }

  static getWinningMoves(grid, symbol) {

    // basic idea get all the winning move for that symbol when a grid is provided
    //define a empty array for final result
    //let winningMoves=[];
    //get all the winningmoves
    let validWinningMoves= ComputerPlayer.getValidMoves(grid,symbol);
    //loop through each cell object
    for (let move of validWinningMoves){
      
      //loop through line of grid to make a copy since symbol will be placed in empty cell
      
      //console.log ("*************MOVE,ROW,COL:"+move.row+"****"+move.col)
          grid[move.row][move.col]=symbol;
          if(TTT.checkWin(grid)===symbol){
            grid[move.row][move.col] = ' ';
            return move;
          }
          grid[move.row][move.col] = ' ';

       
    }
    //console.log(winningMoves);
    //return winningMoves;
    return false;
    
  }

  static getSmartMove(grid, symbol) {

    // Your code here
    // let smartMove=ComputerPlayer.getWinningMoves(grid,symbol);
    // if(smartMove.length>1){
    //   for(let move of smartMove){
    //     if((move.row===0 && move.col ===0) || (move.row===2 && move.col ===2) || (move.row===0 && move.col ===2) || (move.row===2 && move.col ===0)){
    //       return smartMove[move.row][move.col];
    //     }
    //   }

    // }else{
    //   return smartMove;
    // }
    
    let opposer;
    if (symbol === 'O') {
      opposer = 'X';
    } else {
      opposer = 'O';
    }
    //get the wining move
    let winningMove=ComputerPlayer.getWinningMoves(grid,symbol);
    //get the opposing move
    let opposeMove=ComputerPlayer.getWinningMoves(grid,opposer);

    if(winningMove){
      return winningMove;
    } else {
      return opposeMove;
    }

  }

}

module.exports = ComputerPlayer;
