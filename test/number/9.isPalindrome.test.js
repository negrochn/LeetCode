const { isPalindrome } = require('../../src/number/9.isPalindrome')

test('isPalindrome, 121', () => {
  expect(isPalindrome(121)).toBe(true)
})
test('isPalindrome, -121', () => {
  expect(isPalindrome(-121)).toBe(false)
})
test('isPalindrome, 10', () => {
  expect(isPalindrome(10)).toBe(false)
})
test('isPalindrome, 0', () => {
  expect(isPalindrome(0)).toBe(true)
})
test('isPalindrome, 1', () => {
  expect(isPalindrome(1)).toBe(true)
})
