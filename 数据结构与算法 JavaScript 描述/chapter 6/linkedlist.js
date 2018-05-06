/**
 * 基于对象的链表
 */

function Node(element) {
    this.element = element
    this.next = null
}

function LinkedList() {
    this.head = new Node('head')
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
    currNode.next = newNode
}

LinkedList.prototype.display = function () {
    var currNode = this.head
    while (currNode.next !== null){
        console.log(currNode.next.element)
        currNode = currNode.next
    }
}

LinkedList.prototype.findPrevious = function (item) {
    var currNode = this.head
    while (currNode.next !== null && currNode.next.element !== item) {
        currNode = currNode.next
    }
    return currNode
}

LinkedList.prototype.remove = function (item) {
    var prevNode = this.findPrevious(item)
    if (prevNode !== null) {
        prevNode.next = prevNode.next.next
    }
}

var llist = new LinkedList()
llist.insert('U', 'head')
llist.insert('And', 'U')
llist.insert('Me', 'And')
llist.insert('FF', 'head')
llist.display()
console.log('------')
llist.remove('FF')
llist.remove('Me')

llist.display()


// 循环列表
// 只需 this.head.next = this.head