const { lengthOfLongestSubstring } = require('../src/string')

test('lengthOfLongestSubstring, "abcabcbb"', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
})
test('lengthOfLongestSubstring, "bbbbb"', () => {
  expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
})
test('lengthOfLongestSubstring, "pwwkew"', () => {
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
})
test('lengthOfLongestSubstring, "a"', () => {
  expect(lengthOfLongestSubstring('a')).toBe(1)
})
test('lengthOfLongestSubstring, "au"', () => {
  expect(lengthOfLongestSubstring('au')).toBe(2)
})
test('lengthOfLongestSubstring, ""', () => {
  expect(lengthOfLongestSubstring('')).toBe(0)
})
test('lengthOfLongestSubstring, "dvdf"', () => {
  expect(lengthOfLongestSubstring('dvdf')).toBe(3)
})
test('lengthOfLongestSubstring, "jbpnbwwd"', () => {
  expect(lengthOfLongestSubstring('jbpnbwwd')).toBe(4)
})
test('lengthOfLongestSubstring, "aab"', () => {
  expect(lengthOfLongestSubstring('aab')).toBe(2)
})
test('lengthOfLongestSubstring, "aabcdae"', () => {
  expect(lengthOfLongestSubstring('aabcdae')).toBe(5)
})
