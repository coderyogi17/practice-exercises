// Your code here
// Your code here
const chai = require('chai')
  , spies = require('chai-spies');

chai.use(spies);

const should = chai.should()
  , expect = chai.expect;

const Person = require("../problems/person");

describe("check person class", function(){

    let mike;
    
    beforeEach(()=>{
        mike = new Person("Mike", 40);
       
    })

    it("should set property and value", function(){
        expect(mike).to.have.keys('name','age','visit','switchVisit','update');
        expect(mike).to.exist;
        expect(mike.name).to.exist;
        expect(mike.age).to.exist;
        expect(mike.name).to.equal("Mike");
        expect(mike.age).to.equal(40);
    });

    describe("Check SayHello", function(){
    it("check if sayHello function returns a string",function(){
        expect(mike.sayHello()).to.equal("Mike , How are you?")
    })
});

let bob;
beforeEach(()=>{
    bob = new Person("Bob", 35);
});

describe("visit(otherPerson", ()=>{
    it("check the argument of visit function is a different person",function(){
        expect(mike).to.not.equal(bob);
    })
    it("check if visit function returns a string",function(){
        expect(mike.visit(bob)).to.equal("Mike visited Bob")
    })

})

    
describe("switchVisit(otherPerson)", ()=>{

   
    it("check if switchVisit function invokes visit function with a different param",()=>{
        const spy= chai.spy.on(bob, 'visit');
        expect(mike.switchVisit(bob)).to.equal("Bob visited Mike");
        expect(spy).to.be.called.once;
    })
})
  
describe("update(obj)", () => {
    it("should update the current instance with the passed-in object's values", () => {
        let brian = new Person('brain', 2);
        let charles= new Person ('Charles', 3)
        brian.update(charles);
        expect(brian.name).to.equal("Charles");
        expect(brian.age).to.equal(3);
    });
    it("if incoming arg is not an object, throw new TypeError with clear message", () => {
        expect(() => bob.update(2)).to.throw(TypeError);
        expect(() => bob.update(2)).to.throw("This is not an object");
    });
    it("if incoming arg is an object but does not have name or age properties, throw new TypeError with clear message", () => {
        expect(() => bob.update({ asbestos: 100 })).to.throw(TypeError);
        expect(() => bob.update({ asbestos: 100 })).to.throw("input needs to be an object with name and age properties");

        expect(() => bob.update({ name: 1 })).to.throw(TypeError);
        expect(() => bob.update({ name: 1 })).to.throw("input needs to be an object with name and age properties");

        expect(() => bob.update({ age: 2 })).to.throw(TypeError);
        expect(() => bob.update({ age: 2 })).to.throw("input needs to be an object with name and age properties");
    });
});

let lisa;
beforeEach(()=>{
    lisa = new Person("Lisa", 35);
});

  describe("check tryUpdate function", function(){
    it("should check if udpate function is called correctly", function(){
        const spy= chai.spy.on(mike, "update");
        expect(mike.tryUpdate(bob)).to.equal(true)
        //expect(mike.tryUpdate(lisa)).to.equal(true);
        //expect(mike.tryUpdate(Array)).to.equal(false);
        expect(spy).to.be.called.once;

    })
    it("if update is not successfully invoked, it should not throw an error but return false", () => {
        expect(bob.tryUpdate(2)).to.equal(false);
        expect(() => bob.tryUpdate(lisa)).to.not.throw();
    });
  })
  describe("greetAll(obj)", () => {
    it("should take in array of Person instances and call the sayHello() method on each instance, returning the returned strings in an array", () => {
        const spy = chai.spy.on(mike, 'sayHello');
        const spy2 = chai.spy.on(bob, 'sayHello');
        const spy3 = chai.spy.on(lisa, 'sayHello');
        expect(Person.greetAll([mike, bob, lisa]).toString()).to.equal(
            ["Mike , How are you?", "Bob , How are you?" ,"Lisa , How are you?"].toString()
        );
        expect(spy).to.have.been.called.once;
        expect(spy2).to.have.been.called.once;
        expect(spy3).to.have.been.called.once;

    });
})
})
