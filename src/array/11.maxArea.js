/**
 * @description 11. 盛最多水的容器
 * @param {number[]} height 
 */
var maxArea = function (height) {
  var i = 0
  var j = height.length - 1
  var max = 0
  while (i < j) {
    max = Math.max(max, Math.min(height[i], height[j]) * (j - i))
    if (height[i] < height[j]) {
      i++
    } else {
      j--
    }
  }
  return max
}

module.exports = {
  maxArea
}