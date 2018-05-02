/**
 * 简略版 List
 */

function List(data) {
    this.data = data || [];
    this.pos = data && data.length || 0;
}

Object.defineProperty(List.prototype, 'length', {
    get: function() {
        return this.data.length;
    }
})

List.prototype.append = function (item) {
    this.data.push(item)
}

List.prototype.remove = function (item) {
    var index = this.data.indexOf(item)
    this.data.splice(index, 1)
}

List.prototype.find = function (item) {
    return this.data.indexOf(item)
}

List.prototype.insert = function (item, index) {
    this.data.splice(index || this.pos + 1, 0, item)
}

List.prototype.clear = function () {
    this.data = []
    this.pos = 0
}

List.prototype.front = function () {
    this.pos = 0
}

List.prototype.end = function () {
    this.pos = this.length - 1

List.prototype.toString = function () {
    return this.data
}

List.prototype.getElement = function () {
    if (this.length === 0) {
        return null
    }
    return this.data[this.pos]
}

List.prototype.prev = function () {
    this.pos > 0 ? this.pos -- : null
}

List.prototype.next = function () {
    this.pos < this.length - 1 ? this.pos ++ : null
}

List.prototype.currPos = function () {
    return this.pos
}

List.prototype.moveTo = function (newPos) {
    if (newPos >= this.pos && newPos <= this.length -1) {
        this.pos = newPos
    }
}

module.exports = List