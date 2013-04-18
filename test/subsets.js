require('chai').should();

var subsets = require('../subsets');

var TEST_NUMBERS = [1, 2, 3, 4, 6];

var NUMBERS = [3, 4, 9, 14, 15, 19, 28, 37, 47, 50, 54, 56, 59, 61, 70, 73, 78,
  81, 92, 95, 97, 99];

describe('subsets', function () {
  describe('combinations()', function () {
    it('should return all subsets of a given array', function () {
      subsets.combinations(TEST_NUMBERS, 4).should.deep.equal([
        [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 6 ],
        [ 1, 2, 4, 6 ],
        [ 1, 3, 4, 6 ],
        [ 2, 3, 4, 6 ]
      ]);
    });
  });

  describe('combinationsRange()', function () {
    it('should return all subsets of a size range of a given array',
      function () {
      subsets.combinationsRange(TEST_NUMBERS, 4, 5).should.deep.equal([
        [ 1, 2, 3, 4 ],
        [ 1, 2, 3, 6 ],
        [ 1, 2, 4, 6 ],
        [ 1, 3, 4, 6 ],
        [ 2, 3, 4, 6 ],
        [ 1, 2, 3, 4, 6 ]
      ]);
    });
  });

  describe('whereLargestIsSum()', function () {
    it('should filter out combinations that don\'t sum correctly', function () {
      subsets.combinationsRange(TEST_NUMBERS, 3, TEST_NUMBERS.length)
        .filter(subsets.whereLargestIsSum)
        .length.should.equal(4);
    });
  });
});

describe('The number of subsets of a given array where the largest number is ' +
  'the sum of the remaining numbers', function () {
  it('should be 179', function () {
    subsets.combinationsRange(NUMBERS, 3, NUMBERS.length)
      .filter(subsets.whereLargestIsSum)
      .length.should.equal(179);
  });
});
