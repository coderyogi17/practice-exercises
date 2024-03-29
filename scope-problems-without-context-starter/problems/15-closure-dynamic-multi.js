/***********************************************************************
Let's practice writing closures by creating a method called `dynamicMultiply(num)`.
The dynamicMultiply function will return a new function that will allow us to
create new separate custom multiply functions.


Look below to see how this function is invoked:

const doubler = dynamicMultiply(2); // returns a functions
doubler(5); // returns 10

const tripler = dynamicMultiply(3);
tripler(5); // returns 15

const multiplyByFive = dynamicMultiply(5);
multiplyByFive(5); // returns 25


***********************************************************************/

// your code here!
const dynamicMultiply= (num)=>{
  let total =0;

    
  return (num1)=>{
      for(let i=0; i<num;i++){
        total+=num1;
      }
      return total;
    
  };
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = dynamicMultiply;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
