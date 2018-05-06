/**
 * 双向列表
 */

function Node(element) {
    this.element = element
    this.next = null
    this.previous = null
}

function LinkedList() {
    this.head = new Node('head')
    this.pos = 0
}

LinkedList.prototype.find = function (item) {
    var currNode = this.head
    while (currNode.element !== item) {
        currNode = currNode.next
    }
    return currNode
}

LinkedList.prototype.insert = function (newElement, item) {
    var newNode = new Node(newElement)
    var currNode = this.find(item)
    newNode.next = currNode.next
    newNode.previous = currNode
    if (currNode.next !== null) {
        currNode.next.previous = newNode
    }
    currNode.next = newNode
    return newNode
}

LinkedList.prototype.remove = function (item) {
    var currNode = this.find(item)
    var prevNode = currNode.previous
    var nextNode = currNode.next

    prevNode.next = nextNode
    if (nextNode !== null) {
        nextNode.previous = prevNode
        currNode.previous = null
        currNode.next = null
    }
}

LinkedList.prototype.findLast = function () {
    var currNode = this.head
    while (currNode.next !== null) {
        currNode = currNode.next
    }
    return currNode
}

LinkedList.prototype.display = function () {
    var currNode = this.head
    while (currNode.next !== null){
        console.log(currNode.next.element)
        currNode = currNode.next
    }
}

LinkedList.prototype.dispReverse = function () {
    var currNode = this.findLast()
    while (currNode.previous !== null) {
        console.log(currNode.element)
        currNode = currNode.previous
    }
}

Object.defineProperty(LinkedList.prototype, 'length', {
    get: function() {
        var len = 0
        var currNode = this.head
        while (currNode !== null){
            currNode = currNode.next
            len++
        }
        return len - 1
    }
})

LinkedList.prototype.advance = function (n) {
    this.pos += n
    if (this.pos > this.length) {
        this.pos = this.length
    }
}

LinkedList.prototype.back = function (n) {
    this.pos -= n
    if (this.pos < 0) {
        this.pos = 0
    }
}

LinkedList.prototype.show = function () {
    var currNode = this.head
    var pos = this.pos
    while (pos >= 0){
        currNode = currNode.next
        pos--
    }
    return currNode
}

var llist = new LinkedList()
llist.insert('U', 'head')
llist.insert('And', 'U')
var me = llist.insert('Me', 'And')
llist.insert('FF', 'head')
llist.display()
console.log('------')
console.log('reverse')
llist.dispReverse()
console.log('------')
// llist.remove('FF')
// llist.remove('Me')

// llist.display()
llist.advance(2)
console.log(llist.show())
llist.back(4)
console.log(llist.show())