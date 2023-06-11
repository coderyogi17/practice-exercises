function myMap(inputArray, callback) {
  //get a copy of the array
  let finalArr=[];
  let newArr= inputArray.slice();
  for(let i=0; i <newArr.length; i++){
    finalArr.push(callback(newArr[i],i,inputArray))

  }
  
  return finalArr;
}

module.exports = myMap;