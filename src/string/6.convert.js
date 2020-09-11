/**
 * @description 6. Z 字形变换
 * @param {*} s 
 * @param {*} numRows 
 */
var convert = function (s, numRows) {
  var arr = new Array(numRows).fill('')
  var result = s
  if (numRows > 1) {
    for (var i = 0, len = s.length; i < len; i++) {
      var j = i % (2 * (numRows - 1))
      var k = i % (numRows - 1)
      if (j >= numRows - 1) {
        k = numRows - 1 - k
      }
      if (j === 0) {
        arr[j] += s[i]
      } else {
        arr[k] += s[i]
      }
    }
    result = arr.join('')
  }
  return result
}

module.exports = {
  convert
}