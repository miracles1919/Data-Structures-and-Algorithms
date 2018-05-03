/**
 * 基数排序
 */

var Queue =  require('./queue')

var queues = []

for (var i = 0; i < 10; i++) {
    queues[i] = new Queue()
}

function getRandomList(n) {
    var nums = []
    for (var i = 0; i < n; i++) {
        nums[i] = Math.floor(Math.random() * 100)
    }
    return nums
}

function distribute(nums, queues, n, digit) {
    for (var i = 0; i < n; i++) {
        var num = nums[i]
        var digitNum
        if (digit === 1) {
            digitNum = num % 10 
        } else {
            digitNum = Math.floor(num / digit)
        }
        queues[digitNum].enqueue(num)
    }
}

function collect(queues) {
    var arr = []
    for (var i = 0; i < queues.length; i++) {
        while(!queues[i].empty()) {
            arr.push(queues[i].dequeue())
        }
    }
    return arr
}

var nums = getRandomList(10)
console.log(nums)
distribute(nums, queues, 10, 1)
distribute(collect(queues), queues, 10, 10)
console.log(collect(queues))
