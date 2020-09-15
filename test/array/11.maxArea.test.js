const { maxArea } = require('../../src/array/11.maxArea')

test('maxArea, [1, 1, 1, 1]', () => {
  expect(maxArea([1, 1, 1, 1])).toBe(3)
})
test('maxArea, [1, 8, 6, 2, 5, 4, 8, 3, 7]', () => {
  expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49)
})
test('maxArea, [1, 2, 3, 4, 5]', () => {
  expect(maxArea([1, 2, 3, 4, 5])).toBe(6)
})
test('maxArea, [1, 2, 2, 1]', () => {
  expect(maxArea([1, 2, 2, 1])).toBe(3)
})
test('maxArea, [1, 3]', () => {
  expect(maxArea([1, 3])).toBe(1)
})