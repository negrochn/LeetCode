const { threeSum } = require('../../src/array/15.threeSum')

test('threeSum, [-1, 0, 1, 2, -1, -4]', () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, -1, 2], [-1, 0, 1]])
})
test('threeSum, [-1, 0, 0, 0, 1, 1, 1]', () => {
  expect(threeSum([-1, 0, 0, 0, 1, 1, 1])).toEqual([[-1, 0, 1], [0, 0, 0]])
})
test('threeSum, [-1, 0, 2]', () => {
  expect(threeSum([-1, 0, 2])).toEqual([])
})
test('threeSum, [-4, -1, -1, -1, 0, 0, 0, 1, 1, 1, 2, 2, 2]', () => {
  expect(threeSum([-4, -1, -1, -1, 0, 0, 0, 1, 1, 1, 2, 2, 2])).toEqual(
    [[-4, 2, 2], [-1, -1, 2], [-1, 0, 1], [0, 0, 0]])
})