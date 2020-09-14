const { myAtoi } = require('../../src/string/8.myAtoi')

test('myAtoi, "42"', () => {
  expect(myAtoi('42')).toBe(42)
})
test('myAtoi, "   -42"', () => {
  expect(myAtoi('   -42')).toBe(-42)
})
test('myAtoi, "4193 with words"', () => {
  expect(myAtoi('4193 with words')).toBe(4193)
})
test('myAtoi, "words and 987"', () => {
  expect(myAtoi('words and 987')).toBe(0)
})
test('myAtoi, "-91283472332"', () => {
  expect(myAtoi('-91283472332')).toBe(-2147483648)
})
test('myAtoi, ""', () => {
  expect(myAtoi('')).toBe(0)
})
test('myAtoi, "0"', () => {
  expect(myAtoi('0')).toBe(0)
})
test('myAtoi, "91283472332"', () => {
  expect(myAtoi('91283472332')).toBe(2147483647)
})
test('myAtoi, "-     -42"', () => {
  expect(myAtoi('-     -42')).toBe(0)
})