/**
 * @description 3. 无重复字符的最长子串
 * @param {*} s 
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var maxSpan = 1;
  for (var i in s.split('')) {
    i = Number(i);
    while (true) {
      if (new Set(s.slice(i, i + maxSpan)).size < maxSpan) {
        break;
      }
      maxSpan++;
    }
  }
  return maxSpan - 1;
};

module.exports = {
  lengthOfLongestSubstring
}