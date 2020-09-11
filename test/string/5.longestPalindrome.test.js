const { longestPalindrome } = require('../../src/string/5.longestPalindrome')

test('longestPalindrome, "babad"', () => {
  expect(longestPalindrome('babad')).toBe('bab')
})
test('longestPalindrome, "cbbd"', () => {
  expect(longestPalindrome('cbbd')).toBe('bb')
})
test('longestPalindrome, "ccc"', () => {
  expect(longestPalindrome('ccc')).toBe('ccc')
})
test('longestPalindrome, "a"', () => {
  expect(longestPalindrome('a')).toBe('a')
})
test('longestPalindrome, ""', () => {
  expect(longestPalindrome('')).toBe('')
})
test('longestPalindrome, "ccbadc"', () => {
  expect(longestPalindrome('ccbadc')).toBe('cc')
})
test('longestPalindrome, "level"', () => {
  expect(longestPalindrome('level')).toBe('level')
})
test('longestPalindrome, "abababa"', () => {
  expect(longestPalindrome('abababa')).toBe('abababa')
})