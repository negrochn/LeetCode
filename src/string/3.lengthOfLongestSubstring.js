/**
 * @description 3. 无重复字符的最长子串
 * @param {*} s 
 */
var lengthOfLongestSubstring = function (s) {
  var map = new Map();
  var max = 0;
  for(var i = 0, j = 0; j < s.length; j++) { // 两个指针，i 指向头部，j 指向尾部
    if (map.has(s[j])) { // 当元素已存在，则移动头部指针 i
      i = Math.max(i, map.get(s[j]) + 1);
    }
    max = Math.max(max, j - i + 1); // 获取字符串的最大长度
    map.set(s[j], j); // key 存放字符串元素，val 存放字符串下标
  }
  return max;
};

module.exports = {
  lengthOfLongestSubstring
}