/**
 * 优先队列
 */

var Queue =  require('./queue')

Queue.prototype.dequeue = function () {
    var codeList = this.data.map(function(item){ return item.code })
    var max = Math.max.apply(Math, codeList)
    var index = codeList.indexOf(max)
    this.data.splice(index, 1)
}

function Patient(name, code) {
    this.name = name;
    this.code = code;
}

var queue = new Queue()

var p1 = new Patient('jack', 1)
var p2 = new Patient('smith', 2)
var p3 = new Patient('rose', 3)

queue.enqueue(p1)
queue.enqueue(p3)
queue.enqueue(p2)

queue.dequeue()

queue.toString()