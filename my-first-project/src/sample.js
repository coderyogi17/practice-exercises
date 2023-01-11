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

const doubler = dynamicMultiply(2); // returns a functions
console.log(doubler); // returns 10
console.log(doubler(5)); // returns 10
