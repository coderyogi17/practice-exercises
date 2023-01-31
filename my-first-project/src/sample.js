// your code here
//function subsets(arr){
  
  // let output=[[]];
  // if(arr.length===0){
  //   return output;
  // }
  // const final=(arr.map(item=> typeof item=='number'? subsets(arr.slice(0,arr.length-1)):arr[0]));
  // output.push(final);
  // return output;
  // //const returns= output.concat(arr.map(item=> typeof item=='number'? subsets(arr.slice(0,arr.length)):output));
  // //returns.concat(arr[arr.length-1]);
  // //return returns;
//}
  function subsets(nums) {
	let powerset=[[]];

  function dfs(index, current){
    
    for(let i=index;i<nums.length;i++){
      current.push(nums[i]);
      powerset.push([...current]);
      dfs(i+1,current);
      current.pop(nums[i]);

    }
  }
  dfs(0,[]);
	return powerset;
}
  
 

  subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]