// Your code here
const chai = require("chai");
const expect = chai.expect;


const reverseString = require("../problems/reverse-string");

describe("given input fun should pring nuf", function () {
    it("should return a the word reversed", function () {
        const actual1 = reverseString("fun");
        const expected= "nuf"
        expect(actual1).to.eql(expected);
        

    });

    it("should throw error for non string", function(){

        expect(()=>reverseString(123)).to.throw(TypeError, 'This is a TypeError!!!');
    })
  });