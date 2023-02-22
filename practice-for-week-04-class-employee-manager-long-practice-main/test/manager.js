const Employee = require('./employee');

class Manager extends Employee{
    constructor(name, salary, title, manager,employees = []) {
      super(name,salary,title,manager);
      this.employees = employees;
    }

    addEmployee(employee){
     this.employees.push(employee);
   }
   calculateBonus(multiplier) {
    console.log(`WHAT IS THIS HERE ${this.salary}`);
    //console.log(`WHAT IS RECURSION RETURNED ********${this._totalSubSalary()}`);
    let bonus = (this.salary+this._totalSubSalary()) * multiplier;
    console.log(`RETURN FINAL BONUS ${bonus}`);
    return bonus;
}

_totalSubSalary() {
    let sum = 0;
    let employees=this.employees;
    for ( let employee of employees) {
        console.log(employee);
        if (employee instanceof Manager) {
            sum += employee.salary;
            console.log (`this is before the call ${sum}`);
            return sum += employee._totalSubSalary();
            
        } else if (employee instanceof Employee) {
            sum += employee.salary;
            console.log (`this is after the call ${sum}`);
        }
    }
    console.log (`FINAL SUM ${sum}`);
    return sum;
}
}
    

try {
    module.exports = Manager;
  } catch {
    module.exports = null;
  }