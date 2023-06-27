const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);
const Bejeweled = require("../class/bejeweled.js");
//const { describe } = require("mocha");

describe('Bejeweled', function () {
  // Add tests for setting up a basic board
  describe('create board', function () {
    it('sets up basic board', function () {
      let emojis = ['🍊', '🥝', '🍇', '🍓', '🥥', '🍋', '❌'];
      let bejeweled = new Bejeweled();
      let validBoard = bejeweled.grid.every((row) => row.every(item => emojis.includes(item)));
      expect(validBoard).to.be.true;
    });
  });

  // Add tests for a valid swap that matches 3
  describe('valid swap', function(){
    let grid;
   
    this.beforeEach(function(){
      
      grid =
        [
          ['🍊', '🍇', '🍓', '🍓', '🥥', '🍋', '🥥', '🍋'],
          ['🥝', '🥝', '🍇', '🍓', '🥥', '🍋', '🥥', '🍋'],
          ['🍊', '🍇', '🍓', '🍓', '🥥', '🍋', '🥥', '🍋'],
          ['🥝', '🥝', '🍇', '🍓', '🥥', '🍋', '🥥', '🍋'],
          ['🍊', '🍇', '🍓', '🍓', '🥥', '🍋', '🥥', '🍋'],
          ['🥝', '🥝', '🍇', '🍓', '🥥', '🍋', '🥥', '🍋'],
          ['🍊', '🍇', '🍓', '🍓', '🥥', '🍋', '🥥', '🍋'],
          ['🥝', '🥝', '🍇', '🍓', '🥥', '🍋', '🥥', '🍋']
        ];

    });
    
    it('swap is valid, ends up in 3 match check',function(){
      
       //test case of valid swap with valid match
       let firstEleRow = 1;
       let firstEleCol = 2;
       let secondEleRow = 1;
       let secondEleCol = 1;
       let canSwap = Bejeweled.swapCheck(grid, firstEleRow, firstEleCol, secondEleRow, secondEleCol);
       expect(canSwap).to.be.true;
    });

    it('swap is invalid, does not end up in 3 element match', function () {
    //test case of invalid swap with invalid match
    firstEleRow = 7;
    firstEleCol = 2;
    secondEleRow = 7;
    secondEleCol = 1;

    canSwap = Bejeweled.swapCheck(grid, firstEleRow, firstEleCol, secondEleRow, secondEleCol);
    expect(canSwap).to.be.false;

  });
  
  it('swap is invalid, tries to swap elements that are not next to each other (no diagonal swaps)', function () {

    //test case of invalid swap trying to swap elements that aren't next to each other 

    firstEleRow = 4;
    firstEleCol = 2;
    secondEleRow = 7;
    secondEleCol = 1;

    canSwap = Bejeweled.swapCheck(grid, firstEleRow, firstEleCol, secondEleRow, secondEleCol);
    expect(canSwap).to.be.false;

  });
  });

  // Add tests for swaps that set up combos
  describe('Combos', function () {
    let grid;

    beforeEach(function () {
      grid =
        [
          ['🍊', '🍇', '🍓', '🥥', '🍋', '🥥', '🍋', '🥝'],
          ['🥝', '🥝', '🍇', '🍓', '🥥', '🍋', '🥥', '🍋'],
          ['🍊', '🍇', '🍓', '🥥', '🍋', '🥥', '🍋', '🥝'],
          ['🥝', '🥝', '🍇', '🍓', '🥥', '🍋', '🥥', '🍋'],
          ['🍊', '🍇', '🍓', '🍓', '🍋', '🥥', '🍋', '🥝'],
          ['🥝', '🥝', '🍇', '🥥', '🥥', '🍋', '🥥', '🍋'],
          ['🍊', '🍇', '🍓', '🥥', '🍋', '🥥', '🍋', '🥝'],
          ['🥝', '🥝', '🍇', '🍓', '🥥', '🍋', '🥥', '🍋']
        ];
    });

    it("should call combos at least once when they happen", function () {

      let firstEleRow = 1;
      let firstEleCol = 3;

      let secondEleRow = 2;
      let secondEleCol = 3;

      let bejeweled = new Bejeweled();
      bejeweled.grid = grid;
      let spy = chai.spy.on(bejeweled, 'combos');

      bejeweled.swap(firstEleRow, firstEleCol, secondEleRow, secondEleCol);

      expect(spy).to.have.been.called.at.least(1);
    });
  });

  // Add tests to check if there are no possible valid moves
  describe('Check For No More Possible Moves', function () {
    it("should not return any valid moves", function () {
      let grid =
        [
          ['🍊', '🍇', '🍓', '🍓', '🥥', '🍋', '🥥', '🍋'],
          ['🥥', '🍋', '🥥', '🍋', '🍊', '🍇', '🍊', '🍇'],
          ['🍊', '🍇', '🍓', '🍓', '🥥', '🍋', '🥥', '🍋'],
          ['🥥', '🍋', '🥥', '🍋', '🍊', '🍇', '🍊', '🍇'],
          ['🍊', '🍇', '🍓', '🍓', '🥥', '🍋', '🥥', '🍋'],
          ['🥥', '🍋', '🥥', '🍋', '🍊', '🍇', '🍊', '🍇'],
          ['🍊', '🍇', '🍓', '🍓', '🥥', '🍋', '🥥', '🍋'],
          ['🥥', '🍋', '🥥', '🍋', '🍊', '🍇', '🍊', '🍇']
        ];
        let bejeweled = new Bejeweled();
        bejeweled.grid  = grid;
      expect(bejeweled.validMoves(grid).length).to.equal(0);
    })
  })


});



