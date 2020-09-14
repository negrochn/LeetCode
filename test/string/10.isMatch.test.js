const { isMatch } = require('../../src/string/10.isMatch')

test('isMatch, "", ""', () => {
  expect(isMatch('', '')).toBe(true)
})
test('isMatch, "a", "a"', () => {
  expect(isMatch('a', 'a')).toBe(true)
})
test('isMatch, "aa", "a"', () => {
  expect(isMatch('aa', 'a')).toBe(false)
})
test('isMatch, "aa", "a*"', () => {
  expect(isMatch('aa', 'a*')).toBe(true)
})
test('isMatch, "ab", ".*"', () => {
  expect(isMatch('ab', '.*')).toBe(true)
})
test('isMatch, "aab", "c*a*b*"', () => {
  expect(isMatch('aab', 'c*a*b*')).toBe(true)
})
test('isMatch, "mississippi", "mis*is*p*."', () => {
  expect(isMatch('mississippi', 'mis*is*p*.')).toBe(false)
})
test('isMatch, "ab", ".*c"', () => {
  expect(isMatch('ab', '.*c')).toBe(false)
})
test('isMatch, "a", "ab*', () => {
  expect(isMatch('a', 'ab*')).toBe(true)
})
test('isMatch, "bbbba", ".*a*a', () => {
  expect(isMatch('bbbba', '.*a*a')).toBe(true)
})