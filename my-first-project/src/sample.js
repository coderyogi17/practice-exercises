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
//   function subsets(nums) {
// 	let powerset=[[]];

//   function dfs(index, current){
    
//     for(let i=index;i<nums.length;i++){
//       current.push(nums[i]);
//       powerset.push([...current]);
//       dfs(i+1,current);
//       current.pop(nums[i]);

//     }
//   }
//   dfs(0,[]);
// 	return powerset;
// }
  
// const makeTree = (categories, parent) => {
//   // your code here
//  let node={};
//  categories
//         .filter(c=>c.parent===parent)
//         .forEach(c=> node[c.id]=makeTree(categories,c.id))
//         console.log(node);
//         return node
// };


//   //subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

//   const categories2 = [
//     { id: 'mammals', 'parent': null },
//     //{ id: 'mammals', 'parent': 'animals' },
//     { id: 'cats', 'parent': 'mammals' },
//    // { id: 'dogs', 'parent': 'mammals' },
//    // { id: 'chihuahua', 'parent': 'dogs' },
//    // { id: 'labrador', 'parent': 'dogs' },
//     { id: 'persian', 'parent': 'cats' },
//     { id: 'siamese', 'parent': 'cats' }
// ];
// makeTree(categories2,null);

// function subsets(nums) {
// 	const powerset = [];
// 	generatePowerset([], 0);

// 	function generatePowerset(path, index) {
// 		powerset.push(path);
// 		for (let i = index; i < nums.length; i++) {
//       console.log([...path]);
//       console.log([...path, nums[i]]);
// 			generatePowerset([...path, nums[i]], i + 1);
// 		}
// 	}

// 	return powerset;
// }

// subsets([1, 2]) // [[], [1], [2], [1, 2]]

// your code here
function permutations(arr, result = []) {
  if (!arr.length) {
    return [result];
  }

  const final = [];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const rest = arr.slice(0, i).concat(arr.slice(i + 1));
    final.push(...permutations(rest, result.concat([current])));
  }

  return final;
}
permutations([1, 2]) // [[1, 2], [2, 1]]

