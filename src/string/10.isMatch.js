/**
 * 10. 正则表达式匹配
 * @param {*} s 
 * @param {*} p 
 */
var isMatch = function(s, p) {
  if (p.length === 0) {
    return !s.length
  }
  // 判断模式 p 的第一个字符与 s 字符串的第一个字符匹配
  var matched = false
  if (s.length > 0 && (s[0] === p[0] || p[0] === '.')) {
    matched = true
  }
  // p 有模式 
  if (p.length > 1 && p[1] === '*') {
    // 第一种情况：s* 匹配 0 个字符
    // 第二种情况：s* 匹配 1 个字符，递归下去，用来表示 s* 匹配多个 s
    return isMatch(s, p.slice(2)) || (matched && isMatch(s.slice(1), p))
  } else {
    return matched && isMatch(s.slice(1), p.slice(1))
  }
}

module.exports = {
  isMatch
}