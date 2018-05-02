/**
 * 编写一个函数，该函数接受一个算术表达式作为参数，返回括号缺失的位置。
 * 下面是一个括号不匹配的算术表达式的例子:2.3 + 23 / 12 + (3.14159×0.24。
 */

var Stack = require('./stack')

function missIndex(expression) {
    var stack = new Stack()
    var pos = 0
    while (expression.indexOf('(', pos) !== -1) {
        var index = expression.indexOf('(', pos)
        stack.push(index)
        pos = index + 1
    }

    while (stack.length > 0) {
        var index = expression.indexOf(')', pos)
        if (index === -1) {
            break
        }
        pos = index + 1
        stack.pop()
    }

    return stack.top === 0 ? -1 : pos
}

console.log(missIndex('2.3 + 23 / 12 + (3.14159×0.24'))
console.log(missIndex('((1+1)'))