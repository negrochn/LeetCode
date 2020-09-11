const { convert } = require('../../src/string/6.convert')

test('convert, "LEETCODEISHIRING", 3', () => {
  expect(convert('LEETCODEISHIRING', 3)).toBe('LCIRETOESIIGEDHN')
})
test('convert, "LEETCODEISHIRING", 4', () => {
  expect(convert('LEETCODEISHIRING', 4)).toBe('LDREOEIIECIHNTSG')
})
test('convert, "LEETCODEISHIRING", 5', () => {
  expect(convert('LEETCODEISHIRING', 5)).toBe('LIEESGEDHNTOIICR')
})
test('convert, "LEETCODEISHIRING", 0', () => {
  expect(convert('LEETCODEISHIRING', 0)).toBe('LEETCODEISHIRING')
})
test('convert, "LEETCODEISHIRING", 1', () => {
  expect(convert('LEETCODEISHIRING', 1)).toBe('LEETCODEISHIRING')
})