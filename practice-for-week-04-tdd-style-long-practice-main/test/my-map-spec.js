// Your code here
const chai = require('chai')
  , spies = require('chai-spies');

chai.use(spies);

const should = chai.should()
  , expect = chai.expect;

const myMap = require("../problems/my-map");

describe("Should test map array", function(){
    let array;
  
    beforeEach(()=>{
        array = new Array();
        
        array.push(...[1,2,3]);
        
    })
    it("should not mutate array", ()=>{
       let arr = myMap(array, ()=> (ele) => ele *2);
        expect(array).to.not.equal(arr);
    })

   

    it("should not use Array.map", ()=>{
        const spy = chai.spy.on(Array.prototype, "map");
        myMap(array, function(){});
        expect(spy).to.not.have.been.called();
      })
  
  
      it("callback should be called for each element", ()=>{
          const spy = chai.spy(()=> (ele)=> ele *2);
          myMap(array, spy);
          expect(spy).to.have.been.called(array.length);
  
      })
  
})
