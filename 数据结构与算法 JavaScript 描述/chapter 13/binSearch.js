/**
 * 二分查找算法
 * 只对有序数据集有效
 */

function binSearch (arr, data) {
    var upperBound = arr.length - 1
    var lowerBound = 0
    while (lowerBound <= upperBound) {
        var mid = Math.floor(((upperBound + lowerBound) / 2))
        if (arr[mid] < data) {
            lowerBound = mid + 1
        } else if (arr[mid] > data) {
            upperBound = mid - 1
        } else {
            return mid
        }
    }
    return -1
}

var nums = []
for(var i = 0; i < 100; i++){
    nums[i] = i
 }
console.log(binSearch(nums, 10))