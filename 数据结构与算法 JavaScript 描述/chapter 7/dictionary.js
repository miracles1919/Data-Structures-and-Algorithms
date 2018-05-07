/**
 * 字典类
 */

function Dictionary() {
    this.data = []
}

Dictionary.prototype.add = function (key, value) {
    this.data[key] = value
}

Dictionary.prototype.find = function (key) {
    return this.data[key]
}

Dictionary.prototype.remove = function (key) {
    delete this.data[key]
}

Dictionary.prototype.showAll = function () {
    for(var key in this.data){
        console.log(key + ' -> ' + this.data[key])
    }
}

Dictionary.prototype.count = function () {
    var n = 0
    for(var key in this.data){
        n ++
    }
    return n
}

Dictionary.prototype.clear = function () {
    this.data = []
}

var dict = new Dictionary()
dict.add('aa', 'like')
dict.add('xmj', 'like')
dict.add('xxj', 'like')
dict.add('a', 'like')

dict.showAll()
console.log(dict.count())