// Return all combinations of a given size from the given array
var combinations = exports.combinations = function (array, size) {
  var head;
  var tail;

  var c;
  var i, j;

  if (size > array.length || size <= 0) {
    return [];
  }

  if (size === array.length) {
    return [array];
  }

  if (size === 1) {
    c = [];

    for (i = 0; i < array.length; i++) {
      c.push([array[i]]);
    }

    return c;
  }

  c = [];

  for (i = 0; i < array.length - size + 1; i++) {
    head = array.slice(i, i + 1);
    tail = combinations(array.slice(i + 1), size - 1);

    for (j = 0; j < tail.length; j++) {
      c.push(head.concat(tail[j]));
    }
  }

  return c;
};

// Return all combinations from the given array in the given size range
exports.combinationsRange = function (array, start, end) {
  var c = [];
  var i;

  for (i = start; i <= end; i++) {
    c = c.concat(combinations(array, i));
  }

  return c;
};

// Returns true if the largest number in the array is the sum of the rest of the
// numbers
exports.whereLargestIsSum = function (array) {
  array.sort(function (a, b) { return b - a; });

  var head = array.slice(0, 1)[0];
  var tail = array.slice(1);

  return head === tail.reduce(function (a, b) { return a + b; });
};
