var isPalindrome = function (x) {
  var n = x
  var r = 0
  if (x < 0) {
    return false
  } else {
    while (n > 0) {
      r = r * 10 + n % 10
      n = Math.floor(n / 10)
    }
  }
  return r === x
}

module.exports = {
  isPalindrome
}