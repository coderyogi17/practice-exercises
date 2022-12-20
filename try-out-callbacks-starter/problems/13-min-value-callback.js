/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(arr, cb) {
    let temp=0;
   
       let i=0;
            for(let j=1; j<arr.length;j++){
                if(arr[i]>arr[j]){
                    temp=arr[j];
                    arr[j]==arr[i];
                    arr[i]=temp;
                }
            }
        let smallest=arr[i];    
   if(cb===undefined){
    return smallest;
   }else{
    return cb(smallest);
   }
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
