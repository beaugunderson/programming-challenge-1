// Tests a given number for primality (slowly)
var isPrime = exports.isPrime = function (number) {
  var i;

  for (i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

// Factorizes a given number (slowly)
exports.factorize = function (number) {
  if (isPrime(number)) {
    return number;
  }

  var factors = [];
  var i;

  for (i = 2; i <= number / 2; i++) {
    if (isPrime(i)) {
      if (number % i === 0) {
        factors.push(i);
      }
    }
  }

  return factors;
};

// Returns the next fibonacci number in the sequnce above a given minimum
var fibonacciAboveMinimum = exports.fibonacciAboveMinimum = function (minimum) {
  var a = 0;
  var b = 1;
  var c = 0;

  while (c <= minimum) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
};

// Returns the first prime fibonacci number after a given minimum
exports.primeFibonnaciAfterMinimum = function (minimum) {
  var f = fibonacciAboveMinimum(minimum);

  while (!isPrime(f)) {
    f = fibonacciAboveMinimum(f + 1);
  }

  return f;
};
