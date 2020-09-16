const { romanToInt } = require('../../src/int/13.romanToInt')

test('romanToInt, "III"', () => {
  expect(romanToInt('III')).toBe(3)
})
test('romanToInt, "IV"', () => {
  expect(romanToInt('IV')).toBe(4)
})
test('romanToInt, "IX"', () => {
  expect(romanToInt('IX')).toBe(9)
})
test('romanToInt, "X"', () => {
  expect(romanToInt('X')).toBe(10)
})
test('romanToInt, "LVIII"', () => {
  expect(romanToInt('LVIII')).toBe(58)
})
test('romanToInt, "MCMXCIV"', () => {
  expect(romanToInt('MCMXCIV')).toBe(1994)
})
test('romanToInt, "MMMCMXCIV"', () => {
  expect(romanToInt('MMMCMXCIV')).toBe(3994)
})
test('romanToInt, "C"', () => {
  expect(romanToInt('C')).toBe(100)
})