function returnsThree() {
  // Your code here
  return 9/3;

}

function reciprocal(n) {
  // Your code here
  if(n <= 1 || n >= 1000000){
 throw new TypeError("This is a TypeError!!!");
}
return 1/n;
}

module.exports = {
  returnsThree,
  reciprocal
};