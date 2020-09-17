/**
 * @description 14. 最长公共前缀
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var len = strs.length
  if (len === 0) {
    return ''
  } else if (len === 1) {
    return strs[0]
  }
  var next = true
  var i = 0
  while (next) {
    for (var j = 0; j < len - 1; j++) {
      if (strs[j][i] == null || strs[j + 1][i] == null || strs[j][i] !== strs[j + 1][i]) {
        next = false
        break
      }
    }
    i++
  }
  return strs[0].slice(0, i - 1)
}

module.exports = {
  longestCommonPrefix
}