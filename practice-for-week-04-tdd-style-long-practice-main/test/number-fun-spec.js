const chai = require("chai");
const spies= require("chai-spies")
const expect = chai.expect;


const numberFun = require("../problems/number-fun");

describe("this is to test function returnsthree", function () {
    it("should return a number 3", function () {
      expect(numberFun.returnsThree()).to.equal(3);
 
    });


  });

  describe("this is to test function reciporcal", function () {
    it("should check all valid arguments", function (){
      
        expect(numberFun.reciprocal(10)).to.equal(1/10);

    });

    it("should check all the invalid arguments", function () {
      
        expect(()=>numberFun.reciprocal(1000000)).to.throw(TypeError, 'This is a TypeError!!!')
    });


  });