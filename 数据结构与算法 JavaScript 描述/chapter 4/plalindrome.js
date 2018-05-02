/**
 * 判断是否为回文
 */

var Stack = require('./stack')

function isPlalindrome(words) {
    var stack = new Stack()
    words.split('').forEach(function(item){
        stack.push(item)
    })
    var reverseStr = ''
    for(var i = 0; i < stack.length; ){
        reverseStr += stack.pop()
    }
    return words === reverseStr
}

console.log(isPlalindrome('dad'))