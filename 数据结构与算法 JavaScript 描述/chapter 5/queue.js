/**
 * 低配版 队列
 */

function Queue() {
    this.data = []
}

Object.defineProperty(Queue.prototype, 'length', {
    get: function () {
        return this.data.length
    }
})

Queue.prototype.enqueue = function (item) {
    this.data.push(item)
}

Queue.prototype.dequeue = function () {
    return this.data.shift()
}

Queue.prototype.front = function () {
    return this.data[0]
}

Queue.prototype.back = function () {
    return this.data[this.length - 1]
}

Queue.prototype.empty = function () {
    return this.length === 0
}

Queue.prototype.toString = function () {
    console.log(this.data) 
}

module.exports = Queue