// Your code here
class Calculator{
	constructor(total=0){
		this.total = total;
	}
	add=(num)=> this.total+=num;
	
	subtract=(num)=>this.total-=num;

	multiply=(num)=>this.total*=num;
	
	divide=(num)=>this.total/=num;

	
	
	
	
}

let calculator = new Calculator();
console.log(calculator.add(50));      // => 50
console.log(calculator.subtract(35)); // => 15
console.log(calculator.multiply(10)); // => 150
console.log(calculator.divide(5));    // => 30
console.log(calculator.total)         // => 30

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}