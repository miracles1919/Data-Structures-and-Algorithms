// 递归
function recurFib(n) {
    if (n < 2) {
        return n
    } else {
        return recurFib(n - 1) + recurFib(n - 2)
    }
}

var cache = {}
function recurFib(n) {
    if (!cache[n]) {
        if (n < 2) {
            cache[n] = n
        } else {
            cache[n] = recurFib(n - 1) + recurFib(n - 2)
            return recurFib(n - 1) + recurFib(n - 2)
        }
    }
    return cache[n]
}

// 动态规划
function dynFib (n) {
    var val = []
    if (n === 1 || n === 2) {
        return 1
    } else {
        val[1] = 1
        val[2] = 2
        for (var i = 3; i <= n; i++) {
            val[i] = val[i - 1] + val[i - 2]
        }
        return val[n - 1]
    }
}

var start = new Date().getTime()
// console.log(recurFib(30))
recurFib(1000)

var stop = new Date().getTime()
console.log(" 递归计算耗时 - " + (stop-start) + " 毫秒 ")
start = new Date().getTime()
// console.log(dynFib(30))
dynFib(10000)
stop = new Date().getTime()
console.log(" 动态规划耗时 - " + (stop-start) + " 毫秒 ");
