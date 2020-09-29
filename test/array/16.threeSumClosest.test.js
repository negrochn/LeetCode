const { threeSumClosest } = require('../../src/array/16.threeSumClosest')

test('threeSumClosest, [-4, -4, -3, -1, 0, 1, 2]', () => {
  expect(threeSumClosest([-4, -4, -3, -1, 0, 1, 2], 4)).toBe(3)
  expect(threeSumClosest([-4, -4, -3, -1, 0, 1, 2], 3)).toBe(3)
  expect(threeSumClosest([-4, -4, -3, -1, 0, 1, 2], 2)).toBe(2)
  expect(threeSumClosest([-4, -4, -3, -1, 0, 1, 2], 1)).toBe(1)
  expect(threeSumClosest([-4, -4, -3, -1, 0, 1, 2], 0)).toBe(0)
  expect(threeSumClosest([-4, -4, -3, -1, 0, 1, 2], -1)).toBe(-1)
  expect(threeSumClosest([-4, -4, -3, -1, 0, 1, 2], -2)).toBe(-2)
  expect(threeSumClosest([-4, -4, -3, -1, 0, 1, 2], -3)).toBe(-3)
  expect(threeSumClosest([-4, -4, -3, -1, 0, 1, 2], -4)).toBe(-4)
  expect(threeSumClosest([-4, -4, -3, -1, 0, 1, 2], -5)).toBe(-5)
  expect(threeSumClosest([-4, -4, -3, -1, 0, 1, 2], -6)).toBe(-6)
  expect(threeSumClosest([-4, -4, -3, -1, 0, 1, 2], -7)).toBe(-7)
  expect(threeSumClosest([-4, -4, -3, -1, 0, 1, 2], -8)).toBe(-8)
  expect(threeSumClosest([-4, -4, -3, -1, 0, 1, 2], -9)).toBe(-9)
  expect(threeSumClosest([-4, -4, -3, -1, 0, 1, 2], -10)).toBe(-11)
  expect(threeSumClosest([-4, -4, -3, -1, 0, 1, 2], -11)).toBe(-11)
  expect(threeSumClosest([-4, -4, -3, -1, 0, 1, 2], -12)).toBe(-11)
})
test('threeSumClosest, [0, 2, 1, -3]', () => {
  expect(threeSumClosest([0, 2, 1, -3], 1)).toBe(0)
})
test('threeSumClosest, [-3, -2, -5, 3, -4]', () => {
  expect(threeSumClosest([-3, -2, -5, 3, -4], -1)).toBe(-2)
})