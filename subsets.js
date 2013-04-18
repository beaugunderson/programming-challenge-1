var combinations = exports.combinations = function (array, k) {
  var head;
  var tail;

  var c;
  var i, j;

  if (k > array.length || k <= 0) {
    return [];
  }

  if (k === array.length) {
    return [array];
  }

  if (k === 1) {
    c = [];

    for (i = 0; i < array.length; i++) {
      c.push([array[i]]);
    }

    return c;
  }

  c = [];

  for (i = 0; i < array.length - k + 1; i++) {
    head = array.slice(i, i + 1);
    tail = combinations(array.slice(i + 1), k - 1);

    for (j = 0; j < tail.length; j++) {
      c.push(head.concat(tail[j]));
    }
  }

  return c;
};

exports.combinationsRange = function (array, start, end) {
  var c = [];
  var i;

  for (i = start; i <= end; i++) {
    c = c.concat(combinations(array, i));
  }

  return c;
};

exports.whereLargestIsSum = function (array) {
  array.sort(function (a, b) { return b - a; });

  var head = array.slice(0, 1)[0];
  var tail = array.slice(1);

  return head === tail.reduce(function (a, b) { return a + b; });
};
