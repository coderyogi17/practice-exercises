// Your code here

Array.prototype.isEqual = function(array) {
    return this.every((ele, index) => {
        return ele === array[index]
    })
}
  
 