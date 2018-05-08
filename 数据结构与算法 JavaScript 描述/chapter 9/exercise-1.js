var Set = require('./set')

Set.prototype.add = function (data) {
    if (this.data.indexOf(data) === -1){
        this.data.push(data)
        this.data = this.data.sort()
        return true
    }
    return false
}

// 将存储方式从数组替换为链表
// Set.data = new LinkedList()
// ...