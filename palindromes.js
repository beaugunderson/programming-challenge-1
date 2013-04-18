// Returns the reverse of the given string
function reverse(string) {
  return string.split('').reverse().join('');
}

// Finds the longest common string from the start of the given strings
exports.longestCommonStringFromStart = function (a, b) {
  var i = 0;

  if (!a || !b) {
    return '';
  }

  while (true) {
    if (a[i] !== b[i] || b[i] === undefined) {
      break;
    }

    i++;
  }

  return a.substring(0, i);
};

// Finds all palindromes in a given string
exports.findAllPalindromes = function (string) {
  string = string.toLowerCase();

  var i, j;
  var palindromes = [];

  // A single-character string is always palindromic
  if (string.length === 1) {
    return [string];
  }

  for (i = 1; i < string.length; i++) {
    // We'll need to test even and odd palindromes, like 'aba' vs. 'abba'
    for (j = 0; j <= 1; j++) {
      var a = string.substring(0, i);
      var b = string.substring(i);

      if (j) {
        b = b.substring(1);
      }

      var match = exports.longestCommonStringFromStart(reverse(a), b);

      if (match.length > 0) {
        palindromes.push(string.substring(i - match.length,
          i + j + match.length));
      }
    }
  }

  return palindromes;
};

// Finds the longest palindromes in a given string (there may be multiple
// longest palindromes in a given string if there's a tie for length)
exports.findLongestPalindromes = function (string) {
  var palindromes = exports.findAllPalindromes(string);

  if (!palindromes.length) {
    return;
  }

  palindromes.sort(function (a, b) {
    return b.length - a.length;
  });

  var longest = palindromes[0].length;

  return palindromes.filter(function (palindrome) {
    return palindrome.length === longest;
  });
};
