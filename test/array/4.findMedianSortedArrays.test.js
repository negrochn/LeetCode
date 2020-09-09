const { findMedianSortedArrays } = require('../../src/array/4.findMedianSortedArrays')

test('findMedianSortedArrays, [1, 3] 和 [2] ，中位数是 2.0', () => {
  expect(findMedianSortedArrays([1, 3], [2])).toBe(2.0)
})
test('findMedianSortedArrays, [1, 2] 和 [3, 4] ，中位数是 2.5', () => {
  expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5)
})
test('findMedianSortedArrays, [3] 和 [-2, -1] ，中位数是 -2.0', () => {
  expect(findMedianSortedArrays([3], [-2, -1])).toBe(-1.0)
})
test('findMedianSortedArrays, [1, 2, 3, 4] 和 [2, 3, 4, 5] ，中位数是 -2.0', () => {
  expect(findMedianSortedArrays([1, 2, 3, 4], [2, 3, 4, 5])).toBe(3)
})
test('findMedianSortedArrays, [] 和 [2] ，中位数是 2.0', () => {
  expect(findMedianSortedArrays([], [2])).toBe(2.0)
})
test('findMedianSortedArrays, [2] 和 [] ，中位数是 2.0', () => {
  expect(findMedianSortedArrays([2], [])).toBe(2.0)
})
test('findMedianSortedArrays, [1, 2, 3, 4, 5] 和 [6, 7, 8, 9] ，中位数是 5', () => {
  expect(findMedianSortedArrays([1, 2, 3, 4, 5], [6, 7, 8, 9])).toBe(5)
})