/**
 * @description 8. 字符串转换整数 (atoi)
 * @param {*} str 
 */
var myAtoi = function (str) {
  class Automaton {
    constructor() {
      // 状态，默认为开始阶段
      this.state = 'start'
      // 正负符号，默认正数
      this.sign = 1
      // 数值，默认是 0
      this.answer = 0
      // 状态和执行阶段对应表
      this.map = new Map([
        ['start', ['start', 'signed', 'integer', 'end']],
        ['signed', ['end', 'end', 'integer', 'end']],
        ['integer', ['end', 'end', 'integer', 'end']],
        ['end', ['end', 'end', 'end', 'end']]
      ])
    }
    // 获取状态的索引
    getIndex(char) {
      var index
      if (char === ' ') { // 空格
        index = 0
      } else if (char === '-' || char === '+') { // 正负号
        index = 1
      } else if (/\d/.test(char)) { // 正数
        index = 2
      } else { // 其他
        index = 3
      }
      return index
    }

    get(char) {
      // 每次传入字符时，都要变更自动机的执行阶段
      this.state = this.map.get(this.state)[this.getIndex(char)]
      if (this.state === 'integer') {
        this.answer = this.answer * 10 + (char - 0)
        this.answer = this.sign === 1 ? Math.min(this.answer, Math.pow(2, 31) - 1) : Math.min(this.answer, Math.pow(2, 31))
      } else if (this.state === 'signed') {
        this.sign = char === '+' ? 1 : -1
      }
    }
  }

  // 生成自动机实例
  var automaton = new Automaton()

  for (var i = 0, len = str.length; i < len; i++) {
    automaton.get(str[i])
    if (automaton.state === 'end') {
      break
    }
  }

  // 返回值，正负 * 数值
  return automaton.answer === 0 ? 0 : automaton.sign * automaton.answer
}

module.exports = {
  myAtoi
}