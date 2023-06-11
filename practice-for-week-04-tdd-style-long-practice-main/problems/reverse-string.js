module.exports = function reverseString(string) {
  // Your code here
  if (typeof string === "string"){
    return string.split("").reverse().join("");
  }else {
    throw new TypeError('This is a TypeError!!!');
  }
  
  
};