/**
 * 基础班 栈
 */

function Stack() {
    this.data = []
    this.top = 0
}

 Object.defineProperty(Stack.prototype, 'length', {
     get: function () {
         return this.data.length
     }
 })

 Stack.prototype.push = function (item) {
     this.data[this.top++] = item
 }

 Stack.prototype.pop = function () {
     return this.data.pop(--this.top)
 }

 // 返回栈顶元素
 Stack.prototype.peek = function () {
     return this.data[this.top - 1]
 }

 Stack.prototype.clear = function () {
    this.data = []
    this.top = 0
 }

 module.exports = Stack