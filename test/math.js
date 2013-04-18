require('chai').should();

var math = require('../math');

describe('math', function () {
  describe('isPrime()', function () {
    it('should return true if the number is prime', function () {
      math.isPrime(2).should.equal(true);
      math.isPrime(5).should.equal(true);
      math.isPrime(7).should.equal(true);
      math.isPrime(3571).should.equal(true);
    });

    it('should return false if the number is not prime', function () {
      math.isPrime(4).should.equal(false);
      math.isPrime(8).should.equal(false);
      math.isPrime(16).should.equal(false);
      math.isPrime(3505).should.equal(false);
    });
  });

  describe('factorize()', function () {
    it('should return the prime factors of a given number', function () {
      math.factorize(12).should.deep.equal([2, 3]);
    });
  });

  describe('fibonacciAboveMinimum()', function () {
    it('should return the next fibonacci number above a given minimum',
      function () {
      math.fibonacciAboveMinimum(1).should.equal(2);
      math.fibonacciAboveMinimum(5702887).should.equal(9227465);
    });
  });

  describe('primeFibonnaciAfterMinimum()', function () {
    math.primeFibonnaciAfterMinimum(317811).should.equal(514229);
  });
});

describe('The sum of the prime divisors of the smallest prime fibonacci ' +
  'greather than 227,000 + 1', function () {
  it('should be 352', function () {
    math.factorize(math.primeFibonnaciAfterMinimum(227000) + 1)
      .reduce(function (a, b) {
        return a + b;
      }).should.equal(352);
  });
});
