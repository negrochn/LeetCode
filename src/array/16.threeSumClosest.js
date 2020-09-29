/**
 * @description 16. 最接近的三数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // 倒序排序
  nums.sort((a, b) => a - b)
  var diff1 = -Infinity
  var diff2 = Infinity
  while (nums.length >= 3) {
    var i = 1, j = nums.length - 1
    while (i < j) {
      var sum = nums[0] + nums[i] + nums[j]
      var diff = sum - target
      if (diff < 0) {
        i++
        diff1 = Math.max(diff1, diff)
      } else if (diff > 0) {
        j--
        diff2 = Math.min(diff2, diff)
      } else {
        return target
      }
    }
    nums.shift()
  }
  return diff2 + diff1 >= 0 ? target + diff1 : target + diff2
}

module.exports = {
  threeSumClosest
}
