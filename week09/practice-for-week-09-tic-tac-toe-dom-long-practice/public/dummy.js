// Your code here

window.addEventListener("DOMContentLoaded", ()=>{
    let player = 'x';
    let board = document.getElementsByClassName("board")[0];
   insertMove(board);
    

   function insertMove(board){
   
    
    board.addEventListener("click", (event) => {
        event.stopPropagation();
        let target = event.target;

        if ( this.player === 'x'){
            
            target.innerHTML = `<img src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg"/>`;
            target.setAttribute("value","o");
           
    
            this.player = 'o';
            
        } else {
            
            target.innerHTML = `<img src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg"/>`;
            target.setAttribute("value","x");
            
            this.player='x';
        }
        
            returnWinMsg(board);

          
        });
    };

    



function returnWinMsg(board){
    if(checkMatch()){
    let msg = document.getElementsByClassName("message")[0];
    msg.innerText= "WINNER: "+player.toUpperCase();
    //document.body.appendChild(msg);
   
    
    } else if (checkifemptysquares()){
    let msg = document.getElementsByClassName("message")[0];
    msg.innerText= "Winner: None";
    //document.body.appendChild(msg);
    }


}

function checkifemptysquares(){
    //any cell with no img attribute is empty
    let count =0;
   
    const colElement = document.getElementsByClassName("col");
    //console.log(colElement);
    for (const cell of colElement){
        //console.log(cell);
        //console.log(cell.children[0]);
      
        if(cell.children[0]){
            
            count = count + 1;
           // console.log(count);
        }

    }   
    if (count === 9){
        return true;
    } else {
        return false;
    }

}

function checkMatch(){

    //check row matches
    let cell1=document.getElementById("squareone").getAttribute("value");
    let cell2=document.getElementById("squaretwo").getAttribute("value");
    let cell3=document.getElementById("squarethree").getAttribute("value");
    let cell4=document.getElementById("squarefour").getAttribute("value");
    let cell5=document.getElementById("squarefive").getAttribute("value");
    let cell6=document.getElementById("squaresix").getAttribute("value");
    let cell7=document.getElementById("squareseven").getAttribute("value");
    let cell8=document.getElementById("squareeight").getAttribute("value");
    let cell9=document.getElementById("squarenine").getAttribute("value");

    if(cell1 !==null && cell1 === cell2 && cell2===cell3){
        //row one matched
        return true;
    } 
    if(cell4 !== null && cell4 === cell5 && cell5===cell6){
        //row two matched
        return true;
    } 
    if(cell7 !==null && cell7 === cell8 && cell8===cell9){
        //row three matched
        return true;
    } 
    if(cell1 !== null && cell1 === cell4 && cell4===cell7){
        //row one matched
        return true;
    } 
    if(cell2 !== null && cell2 === cell5 && cell5===cell8){
        //row one matched
        return true;
    } 
    if(cell3!== null & cell3 === cell6 && cell6===cell9){
        //row one matched
        return true;
    } 
    if(cell1 !== null && cell1 === cell5 && cell5===cell9){
        //row one matched
        return true;
    } 
    if(cell3!==null && cell3 === cell5 && cell5===cell7){
        //row one matched
        return true;
    } 
   return false;
    
}
});
    


  
