const { intToRoman } = require('../../src/int/12.intToRoman')

test('intToRoman, 3', () => {
  expect(intToRoman(3)).toBe('III')
})
test('intToRoman, 4', () => {
  expect(intToRoman(4)).toBe('IV')
})
test('intToRoman, 9', () => {
  expect(intToRoman(9)).toBe('IX')
})
test('intToRoman, 10', () => {
  expect(intToRoman(10)).toBe('X')
})
test('intToRoman, 58', () => {
  expect(intToRoman(58)).toBe('LVIII')
})
test('intToRoman, 1994', () => {
  expect(intToRoman(1994)).toBe('MCMXCIV')
})
test('intToRoman, 3994', () => {
  expect(intToRoman(3994)).toBe('MMMCMXCIV')
})
test('intToRoman, 100', () => {
  expect(intToRoman(100)).toBe('C')
})