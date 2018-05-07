/**
 * 传说在公元1世纪的犹太战争中，犹太历史学家弗拉维奥·约瑟夫斯和他的40个同胞被罗马士兵包围。
 * 犹太士兵决定宁可自杀也不做俘虏，于是商量出了一个自杀方案。
 * 他们围成一个圈，从一个人开始，数到第三个人时将第三个人杀死，然后再数，直到杀光所有人。
 * 约瑟夫和另外一个人决定不参加这个疯狂的游戏，他们快速地计算出了两个位置，站在那里得以幸存。
 * 写一段程序将 n 个人围成一圈，并且第 m 个人会被杀掉，计算一圈人中哪两个人最后会存活。
 * 使用循环链表解决该问题
 */

function Node(element) {
    this.element = element
    this.next = null
}

function LinkedList() {
    this.head = new Node('head')
    this.head.next = this.head
    this.pos = -1
}

Object.defineProperty(LinkedList.prototype, 'length', {
    get: function() {
        var len = 0
        var currNode = this.head
        while (currNode.next.element !== 'head'){
            currNode = currNode.next
            len++
        }
        return len
    }
})

LinkedList.prototype.find = function (item) {
    var currNode = this.head
    while (currNode.element !== item) {
        currNode = currNode.next
    }
    return currNode
}

LinkedList.prototype.indexOf = function (item) {
    var currNode = this.head
    var pos = -1
    while (currNode.element !== item) {
        pos ++
        currNode = currNode.next
    }
    return pos
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
    this.pos = this.indexOf(prevNode.element)
}

LinkedList.prototype.advance = function (n) {
    while (n > 0) {
        this.pos ++
        n --
        if (this.pos >= this.length) {
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

function survive (n, m) {
    var llist = new LinkedList()
    llist.insert(1, 'head')
    for(var i = 1; i < n ; i++){
        llist.insert(i + 1, i)
    }
    while (llist.length > 2){
        llist.advance(m)
        llist.remove(llist.show().element)
    }
    llist.display()
}

survive(10, 3)
survive(41, 3)