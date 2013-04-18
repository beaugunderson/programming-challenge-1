require('chai').should();

var palindromes = require('../palindromes');

var COMPLETE_PALINDROMES = [
  'a',
  'aaabbbaaa',
  'aba',
  'abba',
  'abccba',
  'racecar'
];

var GETTYSBURG = 'Fourscoreandsevenyearsagoourfaathersbroughtforthonthisconta' +
  'inentanewnationconceivedinzLibertyanddedicatedtothepropositionthatallmenar' +
  'ecreatedequalNowweareengagedinagreahtcivilwartestingwhetherthatnaptionoran' +
  'ynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefieml' +
  'doftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplacefor' +
  'thosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandprop' +
  'erthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewec' +
  'annothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecra' +
  'teditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlon' +
  'grememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforustheliving' +
  'rathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusf' +
  'arsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremaining' +
  'beforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhich' +
  'theygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeads' +
  'hallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomand' +
  'thatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth';

describe('palindromes', function () {
  describe('longestCommonStringFromStart()', function () {
    it('should find the longest common string from the start', function () {
      palindromes.longestCommonStringFromStart('aaab', 'aaac')
        .should.equal('aaa');

      palindromes.longestCommonStringFromStart('aaab', 'aa')
        .should.equal('aa');

      palindromes.longestCommonStringFromStart(undefined, 'aaac')
        .should.equal('');
    });
  });

  describe('findLongestPalindromes()', function () {
    COMPLETE_PALINDROMES.forEach(function (palindrome) {
      it('should find the longest palindromes in "' + palindrome + '"',
        function () {
        var longestPalindromes = palindromes.findLongestPalindromes(palindrome);

        console.log(longestPalindromes);

        longestPalindromes.length.should.be.above(0);
        longestPalindromes[0].length.should.equal(palindrome.length);
      });
    });
  });

  describe('findPalindromes()', function () {
    COMPLETE_PALINDROMES.forEach(function (palindrome) {
      it('should find all palindromes in the string "' + palindrome + '"',
        function () {
        var allPalindromes = palindromes.findAllPalindromes(palindrome);

        console.log(allPalindromes);

        allPalindromes.length.should.be.above(0);
      });
    });
  });
});

describe('The Gettysburg Address', function () {
  it('should contain the longest palindrome "ranynar"', function () {
    var longestPalindromes = palindromes.findLongestPalindromes(GETTYSBURG);

    console.log(longestPalindromes);

    longestPalindromes[0].should.equal('ranynar');
  });
});
