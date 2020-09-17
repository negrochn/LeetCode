const { longestCommonPrefix } = require('../../src/string/14.longestCommonPrefix')

test('longestCommonPrefix, ["flower","flow","flight"]', () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe('fl')
})
test('longestCommonPrefix, ["dog","racecar","car"]', () => {
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe('')
})
test('longestCommonPrefix, ["dog"]', () => {
  expect(longestCommonPrefix(["dog"])).toBe('dog')
})
test('longestCommonPrefix, [""]', () => {
  expect(longestCommonPrefix([''])).toBe('')
})
test('longestCommonPrefix, []', () => {
  expect(longestCommonPrefix([])).toBe('')
})