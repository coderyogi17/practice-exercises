// Your code here
class CallCenter{
	constructor(name){
		this.name=name;
	}
	sayHello(){
		console.log(`Hello this is ${this.name}`);
	}
	//key lesson is setTimeout arrow function is lexical scoped within callMeLater function, which is part of the this(CallCenter) object
	callMeLater(delay){
		setTimeout(() => {
			this.sayHello();
		  }, delay);
	}
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}