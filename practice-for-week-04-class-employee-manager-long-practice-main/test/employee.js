

class Employee {
    constructor(name, salary, title, manager = null) {
      this.name = name;
      this.title = title;
      this.salary = salary;
      this.manager = manager;

      if ( manager !==null){
        manager.addEmployee(this);
      }
      }

      calculateBonus(multiplier) {
        let bonus = this.salary * multiplier;
        return bonus;

    }
      

    }
   

  
    


try {
    module.exports = Employee;
  } catch {
    module.exports = null;
  }