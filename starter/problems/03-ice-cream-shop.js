/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
***********************************************************************/


// your code here
function iceCreamShop(arr,word){
  if(arr.length===0) {
    return false;
  }
    if(arr[0]===word) {
      return true;
    }   
    
    return iceCreamShop(arr.slice(1),word);
  
}

// // your code here
// function iceCreamShop(arr,word){
  
//   return arr.length===0?false:
//   arr[0]===word? true:iceCreamShop(arr.slice(1),word);
    

// }

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = iceCreamShop;
} catch (e) {
  module.exports = null;
}
