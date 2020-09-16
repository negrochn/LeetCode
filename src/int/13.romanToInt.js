/**
 * @description 13. 罗马数字转整数
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]])
  var result = 0
  for (var i = 0, j = 1, len = s.length; i < len;) {
    var m = map.get(s[i])
    var n = map.get(s[j])
    if (m < n) {
      result += n - m
      i = j + 1
    } else {
      while (s[i] === s[j]) {
        j++
      }
      result += m * (j - i)
      i = j
    }
    j = i + 1
  }
  return result
}

module.exports = {
  romanToInt
}