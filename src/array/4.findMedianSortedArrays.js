/**
 * @description 4. 寻找两个正序数组的中位数
 * @param {*} nums1 
 * @param {*} nums2 
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  var m = nums1.length;
  var n = nums2.length;
  var low = 0; // 二叉树查找范围
  var high = m;
  var result;
  while (low <= high) {
    var i = low + Math.floor((high - low) / 2);
    var j = Math.floor((m + n + 1) / 2 - i);
    var left1 = i === 0 && -Infinity || nums1[i - 1];
    var right1 = i === m && Infinity || nums1[i];
    var left2 = j === 0 && -Infinity || nums2[j - 1];
    var right2 = j === n && Infinity || nums2[j];
    if (left1 <= right2 && left2 <= right1) {
      // 满足条件，返回中位数
      if ((m + n) % 2 === 1) {
        result = Math.max(left1, left2);
      } else {
        result = (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
      }
      break;
    } else if (left1 > right2) {
      high = i - 1;
    } else if (left2 > right1) {
      low = i + 1;
    }
  }
  return result;
};

module.exports = {
  findMedianSortedArrays
}