/**
 * 现实生活中栈的一个例子是佩兹糖果盒。
 * 想象一下你有一盒佩兹糖果，里面塞满了红色、黄色和白色的糖果，但是你不喜欢黄色的糖果。
 * 使用栈(有可能用到多个栈)写一段程序，在不改变盒内其他糖果叠放顺序的基础上，将黄色糖果移出。
 */

var Stack = require('./stack')

var COLOR = {
    red: 0,
    yellow: 1,
    white: 2
}

var candyList = [COLOR.red, COLOR.yellow, COLOR.white, COLOR.white, COLOR.red, COLOR.yellow]

function removeYellow (list) {
    var stack = new Stack()
    candyList.forEach(function(item){
        if (item !== COLOR.yellow) {
            stack.push(item)
        }
    })
    console.log(stack.toString())
}

removeYellow(candyList)