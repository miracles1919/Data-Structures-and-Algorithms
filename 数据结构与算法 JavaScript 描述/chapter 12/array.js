function CArray (length) {
    this.data = []

    for(var i = 0; i < length; i++) {
        this.data[i] = i
    }
}

Object.defineProperty(CArray.prototype, 'length', {
    get: function () {
        return this.data.length
    }
})

CArray.prototype.setData = function () {
    for(var i = 0, len = this.data.length; i < len; i++) {
        this.data[i] = Math.floor(Math.random() * (i + 1))
    }
}

CArray.prototype.clear = function () {
    this.data = []
}

CArray.prototype.toString = function (data) {
    var str = ''
    if (!data) {
        data = this.data
    }
    for (var i = 0, len = data.length; i <= len; i++) {
        str += data[i] + ' '
        if (i > 0 && (i + 1) % 10 === 0) {
            console.log(str)
            str = ''
        }
    }
}

// 冒泡排序
CArray.prototype.bubbleSort = function () {
    var arr = this.data.slice(0)
    for (var i = 0, len = arr.length; i < len; i++) {
        for (var j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j+1]){
                var temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
    // this.toString(arr)
}

// 选择排序
CArray.prototype.selectSort = function () {
    var arr = this.data.slice(0)
    for (var i = 0, len = arr.length; i < len - 1; i++) {
        var min = arr[i]
        var index = i
        for (var j = i + 1; j < len; j++) {
            if(min > arr[j]){
                min = arr[j]
                index = j
            }
        }
        arr[index] = arr[i]
        arr[i] = min
    }
    // this.toString(arr)
}

// 插入排序
CArray.prototype.insertSort = function () {
    var arr = this.data.slice(0)
    for (var i = 1, len = arr.length; i < len; i++) {
        var temp = arr[i]
        var j = i
        while (j > 0 && arr[j-1] >= temp){
            arr[j] = arr[j-1]
            j--
        }
        arr[j] = temp
    }
    // this.toString(arr)
}

// 希尔排序
CArray.prototype.shellSort = function () {
    var gaps = [5, 3, 1]
    var arr = this.data.slice(0)
    for (var g = 0; g < gaps.length; g++) {
        var gap = gaps[g]
        for (var i = gap, len = arr.length; i < len; i++) {
            var temp = arr[i]
            var j = i
            while (j >= gap && arr[j-gap] >= temp){
                arr[j] = arr[j-gap]
                j -= gap
            }
            arr[j] = temp
        }
    }
    // this.toString(arr)
}

// 动态计算间隔序列的希尔排序
CArray.prototype.shellSort2 = function () {
    var N = this.length
    var h = 1
    while (h < N / 3) {
        h = h * 3 + 1
    }

    var arr = this.data.slice(0)
    while (h >= 1) {
        for (var i = h, len = arr.length; i < len; i++) {
            var temp = arr[i]
            var j = i
            while (j >= h && arr[j - h] >= temp){
                arr[j] = arr[j - h]
                j -= h
            }
            arr[j] = temp
        }
        h = (h - 1) / 3
    }
    
    // this.toString(arr)
}

// 自底向上的归并排序
CArray.prototype.mergeSort = function () {
    var step = 1
    var left, right
    var arr = this.data.slice(0)
    while (step < arr.length) {
        left = 0
        right = step
        while (right + step <= arr.length) {
            mergeArrays(arr, left, left + step, right, right + step)
            left = right + step
            right = left + step
        }
        if (right < arr.length) {
            mergeArrays(arr, left, left + step, right, arr.length)
        }
        step *= 2
    }
    // this.toString(arr)
}

function mergeArrays (arr, startLeft, stopLeft, startRight, stopRight) {
    var rightArr = new Array(stopRight - startRight + 1)
    var leftArr = new Array(stopLeft - startLeft + 1)
    var k = startRight
    for (var i = 0; i < rightArr.length - 1; i++) {
        rightArr[i] = arr[k];
        k++
    }
    k = startLeft
    for (var i = 0; i < leftArr.length - 1; i++) {
        leftArr[i] = arr[k];
        k++
    }
    rightArr[rightArr.length - 1] = Infinity    // 哨兵值
    leftArr[leftArr.length - 1] = Infinity
    var m = 0, n = 0
    for (var k = startLeft; k < stopRight; k++) {
        if (leftArr[m] <= rightArr[n]) {
            arr[k] = leftArr[m]
            m++
        } else {
            arr[k] = rightArr[n]
            n++
        }
    }
}

// 快速排序
function quickSort(arr) {
    if (arr.length === 0) {
        return []
    }
    var lesser = []
    var greater = []
    var pivot = arr[0]  // 基准数
    for(var i = 1; i < arr.length; i++) {
        var item = arr[i]
        if (item < pivot) {
            lesser.push(item)
        } else {
            greater.push(item)
        }
    }
    return quickSort(lesser).concat(pivot, quickSort(greater))
}




function getTime(fun) {
    var start = new Date().getTime()
    fun()
    var end = new Date().getTime()
    var elapsed = end - start
    console.log('消耗时间：' + elapsed + 'ms')
}

var arr = new CArray(100000)
arr.setData()
// arr.toString()

// console.log('bubble')
// getTime(arr.bubbleSort.bind(arr))
// console.log('select')
// arr.selectSort()
// getTime(arr.selectSort.bind(arr))
// console.log('insert')
// arr.insertSort()
// getTime(arr.insertSort.bind(arr))
// console.log('shell')
// getTime(arr.shellSort.bind(arr))
console.log('shell2')
getTime(arr.shellSort2.bind(arr))

console.log('merge')
getTime(arr.mergeSort.bind(arr))

console.log('quick')
getTime(quickSort.bind(this, arr.data))

console.log('sort')
var start = new Date().getTime()
arr.data.sort()
var end = new Date().getTime()
var elapsed = end - start
console.log('消耗时间：' + elapsed + 'ms')
