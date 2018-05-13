/**
 * 自组织方式的顺序查找
 * 80-20原则
 */

function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] === data && i > arr.length * 0.2) {
           var temp = arr[i]
           arr[i] = arr[i - 1]
           arr[i - 1] = temp
           return true
        }
        else if (arr[i] == data) {
           return true
        }
    }
    return false;
}

var arr = [4, 5, 1, 8, 10, 1, 3, 10, 0, 1]
console.log(seqSearch(arr, 3))
console.log(seqSearch(arr, 3))
console.log(seqSearch(arr, 3))
console.log(arr)