function Node(element) {
    this.element = element
    this.next = null
}

function LinkedList() {
    this.head = new Node('head')
    this.head.next = this.head
    this.pos = 0
}

Object.defineProperty(LinkedList.prototype, 'length', {
    get: function() {
        var len = 0
        var currNode = this.head
        while (currNode.next.element !== 'head'){
            currNode = currNode.next
            len++
        }
        return len - 1
    }
})

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
    while (currNode.next.element !== 'head'){
        var nextNode = currNode.next
        console.log(currNode.next.element)
        currNode = currNode.next
    }
}

LinkedList.prototype.findPrevious = function (item) {
    var currNode = this.head
    while (currNode.next.element !== 'head' && currNode.next.element !== item) {
        currNode = currNode.next
    }
    return currNode
}

LinkedList.prototype.remove = function (item) {
    var prevNode = this.findPrevious(item)
    prevNode.next = prevNode.next.next
}

LinkedList.prototype.advance = function (n) {
    while (n > 0) {
        this.pos ++
        n --
        if (this.pos > this.length) {
            this.pos = 0
        }
    }
}

LinkedList.prototype.back = function (n) {
    while (n > 0) {
        this.pos --
        n --
        if (this.pos < 0) {
            this.pos = this.length
        }
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
llist.insert('Me', 'And')
llist.insert('FF', 'head')

llist.advance(2)
console.log(llist.show())
llist.back(1)
console.log(llist.show())


llist.display()