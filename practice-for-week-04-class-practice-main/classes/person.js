// Your code here
class Person{
  constructor(firstName,lastName,age){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
  }

  introduce() {
   console.log( `Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
 }
 
 static introducePeople(persons){
      let newPerson= [];
      if(Array.isArray(persons)===true){
      newPerson= persons.filter((person)=> person instanceof Person);
      }
      if(Array.isArray(persons)===false){
        throw new Error("introducePeople only takes an array as an argument.");
        
      } else if (newPerson.length!==persons.length){
        throw new Error("All items in array must be Person class instances.");
      } else {
        persons.forEach(person=> person.introduce());
      }
      
  
 }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}