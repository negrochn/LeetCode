/**
 * @description 5. 最长回文子串
 * @param {*} s 
 */
var longestPalindrome = function (s) {
  var result = '';
  for (var i = 0, len = s.length; i < len; i++) {
    var j = 1;
    while (s[i] === s[i + j]) {
      j++;
    }
    // j - 1 的差值
    // i, i + j - 1
    var k = 1;
    while (i - k >= 0 && i + j - 1 + k <= len && s[i - k] === s[i + j - 1 + k]) {
      k++;
    }
    // k - 1 的差值
    // i - (k - 1), i + j - 1 + (k - 1)
    if (j + 2 * k - 2 > result.length) {
      result = s.slice(i - k + 1, i + j + k - 1);
    }
  }
  return result;
};

module.exports = {
  longestPalindrome
};