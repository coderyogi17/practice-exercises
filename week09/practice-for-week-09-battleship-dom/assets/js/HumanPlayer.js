import Board from "./board.js";

export default class HumanPlayer {
    constructor(){
        this.board = new Board();
        this.validMoves = new Set();

        //put all the valid moves in a set which only allows unique values
        this.board.grid.forEach((row)=>{
            row.forEach((col)=>{
                this.validMoves.add([row, col]);
                
            });
        });
        console.log(this.validMoves);
    }


//checks move is valid??-- seems meaningless
//  isValid(row, col) {
//     let valid = this.validMoves.has([row,col]);
//     return valid;
// }

//makes move, removes that move from validMoves and returns result of if it was a hit
 makeMove(row,col) {
    console.log(this.validMoves[row,col]);
    this.validMoves.delete([row,col]);
    //returns the cell value
    return this.board.makeHit(row,col);
    }

 hasWon() {
    return this.board.isGameOver();
}

}