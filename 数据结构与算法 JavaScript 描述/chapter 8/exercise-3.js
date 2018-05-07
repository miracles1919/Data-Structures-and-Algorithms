/**
 * 线性探测法
 */

var HashTable = require('./hashtable')

HashTable.prototype.put = function (key, data) {
    var hash = this.betterHash(key)
    while(this.table[hash] !== undefined) {
        hash ++ 
    }
    this.table[hash] = data
}

HashTable.prototype.show = function() {
    for (var i = 0; i < this.table.length; i++) {
        if (this.table[i] !== undefined) {
            console.log(i + ': ' + this.table[i])
        }
    }
}

var ht = new HashTable()

var someNames = ["David", "Jennifer", "Donnie", "Jonathan", "Danny"]
for (var i = 0; i < someNames.length; ++i) {
    ht.put(someNames[i], someNames[i])
}

ht.show()


//使用线性探测法创建一个字典，用来保存单词的定义

function Dict() {
    this.ht = new HashTable()
}

Dict.prototype.save = function (word, define) {
    this.ht.put(word, define)
}

// ...
