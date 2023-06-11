class Person{
  constructor (name, age){
      this.name = name;
      this.age = age;
  }

  sayHello(){
    return (this.name + " , How are you?")
  }

  visit = (otherPerson) => `${this.name} visited ${otherPerson.name}`;

  switchVisit=(otherPerson)=> otherPerson.visit(this);
  

  update=(obj)=>{
    if(obj instanceof Person){
     this.name= obj.name;
      this.age = obj.age;
    } else if (obj instanceof Object){
      throw new TypeError("input needs to be an object with name and age properties");
    } else {
      throw new TypeError ("This is not an object");
    }
  }

  tryUpdate(obj){
    try{
    this.update(obj)
      return true;
    
    }
    catch{
      return false
    } 
  }

  static greetAll([...Person]){
    let newArr= [];
    Person.map(person=>{
      newArr.push(person.sayHello());
    })
    return newArr;
  }

}
module.exports = Person;