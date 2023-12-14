import Board from "./board.js";

export default class ComputerPlayer{
    constructor(){
        this.board = new Board();
        this.validMoves = [];

        //put the moves
        for (let row in this.board.grid){
            for(let col in this.board.grid[row]){
                this.validMoves.push([row,col]);
            }
        }
    }

    makeMove() {
        //check if there are validmoves available
        if(this.validMoves.length > 0){
            //pick a random move
            let randomIdx = Math.floor(Math.random() * this.validMoves.length)

            //assign the coordinates at that location
            let coord = this.validMoves[randomIdx];
            
            //remove that coord from the validMoves array
            this.validMoves.splice(randomIdx,1);

            //assign the coord to row and col
            let row = coord[0];
            let col= coord[1];

            //send the row and column in makeHit
            let result = this.board.makeHit(row,col);
            return {result:result, coord: [row,col]};

        }
    }

    hasWon(){
        return this.board.isGameOver();
    }
}

