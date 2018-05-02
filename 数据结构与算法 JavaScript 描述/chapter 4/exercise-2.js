/**
 * 一个算术表达式的后缀表达式形式如下: op1 op2 operator
 * 使用两个栈，一个用来存储操作数，另外一个用来存储操作符，设计并实现一个函数
 * 该函数可以将中缀表达式转换为后缀表达式，然后利用栈对该表达式求值。
 */

var Stack = require('./stack')

function deelMultiAndDivi (expression) {
    var numStack = new Stack()
    var opStack = new Stack()
    var suffix = ''

    expression.split(/[*/]/).forEach(function(item){
        numStack.push(item.trim())
    })
    expression.match(/[*/]/g).forEach(function(item){
        opStack.push(item.trim())
    })

    while (opStack.length > 0){
        suffix = (numStack.pop() + ' ' + numStack.pop() + ' ' + opStack.pop())
        numStack.push('(' + suffix + ')')
    }
    return suffix
}

function infix2Suffix(expression) {
    var numStack = new Stack()
    var opStack = new Stack()
    var suffix = ''

    expression.split(/[-+]/).forEach(function(item){
        if (item.search(/[*/]/) !== -1) {
            numStack.push('(' + deelMultiAndDivi(item.trim()) + ')')
        } else {
            numStack.push(item.trim())
        }
    })

    expression.match(/[-+]/g).forEach(function(item){
        opStack.push(item.trim())
    })

    while (opStack.length > 0){
        suffix = (numStack.pop() + ' ' + numStack.pop() + ' ' + opStack.pop())
        numStack.push('(' + suffix + ')')
    }
    console.log(suffix)
    return suffix
}

// console.log('xx', split('2 * 3 / 3'))

infix2Suffix('1 + 2 * 3 / 3 - 4 / 4')