// Your code here
const  Employee = require('./employee');

const newEmployee= new Employee("John Wick","Dog Lover");
const boundPurr = newEmployee.sayName.bind(newEmployee);
global.setTimeout(boundPurr, 2000);
const boundOcc = newEmployee.sayOccupation.bind(newEmployee);
global.setTimeout(boundOcc, 3000);