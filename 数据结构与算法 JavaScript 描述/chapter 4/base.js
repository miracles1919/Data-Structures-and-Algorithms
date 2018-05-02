/**
 * 基数为 2~9 的进制转换
 */

var Stack = require('./stack')

function mulBase(num, base) {
    var stack = new Stack()
    do {
        stack.push(num % base)
        num = Math.floor(num / base)
    } while (num !== 0)

    var str = ''
    while (stack.length > 0) {
        str += stack.pop()
    }
    return str
}

console.log(mulBase(6, 2))
console.log(mulBase(12, 8))