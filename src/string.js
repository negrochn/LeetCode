/**
 * @description 3. 无重复字符的最长子串
 * @param {*} s 
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var map = new Map();
  var max = 0;
  for(var i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(i, map.get(s[j]) + 1);
    }
    max = Math.max(max, j - i + 1);
    map.set(s[j], j);
  }
  return max;
};

module.exports = {
  lengthOfLongestSubstring
}