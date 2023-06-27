const { expect } = require('chai');

const Cursor = require("../class/cursor.js");
const Screen = require("../class/screen.js");

describe ('Cursor', function () {

  let cursor;

  beforeEach(function() {
    cursor = new Cursor(8, 8);
  });


  it('initializes for a 8x8 grid', function () {
    expect(cursor.row).to.equal(0);
    expect(cursor.col).to.equal(0);
  });

  it('correctly processes down inputs', function () {

    cursor.down();
    expect([cursor.row, cursor.col]).to.deep.equal([1, 0]);

    cursor.down();
    expect([cursor.row, cursor.col]).to.deep.equal([2, 0]);

    cursor.down();
    cursor.down();
    cursor.down();
    cursor.down();
    cursor.down();
    cursor.down();
    cursor.down();
    cursor.down();
    cursor.down();
    cursor.down();
    cursor.down();
    cursor.down();

    expect([cursor.row, cursor.col]).to.deep.equal([7, 0]);
  });

  it('correctly processes up inputs', function () {

    cursor.up();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);

    cursor.down();
    expect([cursor.row, cursor.col]).to.deep.equal([1, 0]);

    cursor.up();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);
  });

  it('processes right inputs', function () {

    cursor.right();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 1]);

    cursor.right();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 2]);

    cursor.right();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 3]);
  });

  it('processes right inputs', function () {

    cursor.right();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 1]);

    cursor.right();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 2]);

    cursor.right();
    cursor.right();
    cursor.right();
    cursor.right();
    cursor.right();
    cursor.right();
    cursor.right();
    cursor.right();
    cursor.right();
    cursor.right();

    expect([cursor.row, cursor.col]).to.deep.equal([0, 7]);
  });

  it('processes left inputs', function () {

    cursor.left();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);

    cursor.left();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);

    cursor.right();
    expect([cursor.row, cursor.col]).to.deep.equal([0, 1]);
  });
  it('selects two separate positions properly, and switches between selecting them properly', function(){

    cursor.right(); 
    cursor.right();
    cursor.down();
    cursor.select();

    expect([cursor.firstEleRow, cursor.firstEleCol]).to.deep.equal([1,2])
    expect(cursor.mode).to.deep.equal(1);
    cursor.down();
    cursor.down();
    cursor.down();
    cursor.select();
    expect([cursor.secondEleRow, cursor.secondEleCol]).to.deep.equal([4,2])
    expect(cursor.mode).to.deep.equal(0);

  })

});

