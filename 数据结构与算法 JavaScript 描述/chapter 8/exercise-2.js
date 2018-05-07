/**
 * 碰撞处理 --- 开链法
 */

var HashTable = require('./hashtable')

HashTable.prototype.buildChains = function() {
    for (var i = 0; i < this.table.length; i++) {
        this.table[i] = []
    }
}

HashTable.prototype.show = function() {
    for (var i = 0; i < this.table.length; i++) {
        if (this.table[i][0] !== undefined) {
            console.log(i + ': ' + this.table[i])
        }
    }
}

HashTable.prototype.put = function (data) {
    var hash = this.betterHash(data)
    var index = 0
    while (this.table[hash][index] !== undefined) {
        index ++
    }
    this.table[hash][index] = data
}

var ht = new HashTable()
ht.buildChains()

var someNames = ["David", "Jennifer", "Donnie", "Jonathan", "Danny"]
for (var i = 0; i < someNames.length; ++i) {
    ht.put(someNames[i])
}

ht.show()
