function isFive(num) {
  // Your code here
  if(num === 5){
    return true;
  }
  return false;
}

function isOdd(number) {
  // Your code here
  if (isNaN(number)) {
    throw new Error('Parameter is not a number!');
  }
  else if(number % 2 !==0 ){
    return true;
  } 
  return false;
}

function myRange(min, max, step) {
  // Your code here
  let newArr=[];
  if(min<max){
  if(step){
    for(i=min; i <=max; i=i+step){
      newArr.push(i);
    }
    
  }
  else{
    for(i=min; i <=max; i++){
      newArr.push(i);
    }
    
  }
}

   return newArr;
}


module.exports = { isFive, isOdd, myRange };