const { parse } = require("@babel/core")

/**
 * @description 15. 三数之和
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b)
  var result = []
  var len = nums.length
  for (var i = 0; i < len - 2; i++) {
    for (var j = i + 1; j < len - 1; j++) {
      if (nums[i] + 2 * nums[j] > 0) {
        break
      }
      if (nums[i] === nums[j]) {
        i = j
      }
      for (var k = j + 1; k < len; k++) {
        if (nums[k] !== nums[k + 1]) {
          if (nums[j] === nums[k]) {
            j = k
            if (nums[i] === nums[k]) {
              i = k
            }
          }
          if (nums[i] + nums[j] + nums[k] >= 0) {
            if (nums[i] + nums[j] + nums[k] === 0) {
              result.push([nums[i], nums[j], nums[k]])
            }
            break
          }
        } else {
          if (nums[j] === nums[k]) {
            j = k
            if (nums[i] === nums[k]) {
              i = k
            }
          }
        }
      }
    }
  }
  return result
}

module.exports = {
  threeSum
}