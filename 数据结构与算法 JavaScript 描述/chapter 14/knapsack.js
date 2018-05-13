/**
 * 如果在我们的保险箱中有 5 件物品，
 * 它们的尺寸分别是 3、4、7、8、9，
 * 而它们的 价值分别是 4、5、10、11、13，
 * 背包的容积为 16，求最优方案
 */

function max (a, b) {
    return a > b ? a : b
}

function method (capacity, size, value, n) {
    if (n === 0 || capacity === 0) {
        return 0
    }
    if (size[n - 1] > capacity) {
        return method(capacity, size, value, n - 1)
    } else {
        return max(value[n - 1] + method(capacity - size[n - 1], size, value, n - 1), method(capacity, size, value, n - 1))
    }
}

var value = [4, 5, 10, 11, 13]
var size = [3, 4, 7, 8, 9]
var capacity = 16
var n = 5

console.log(method(capacity, size, value, n))