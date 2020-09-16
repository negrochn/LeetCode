/**
 * @description 12. 整数转罗马数字
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  var romans = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX',
    '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
    '', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
    '', 'M', 'MM', 'MMM']
  var str = num.toString()
  var result = ''
  for (var i = 0, len = str.length - 1; i <= len; i++) {
    result += romans.slice(10 * (len - i))[str[i]]
  }
  return result
}

module.exports = {
  intToRoman
}