/**
 * 散列表
 */

function HashTable() {
    this.table = new Array(137)
}

// 散列函数
HashTable.prototype.simpleHash = function (data) {
    var total = 0
    for (var i = 0; i < data.length; i++) {
        total += data.charCodeAt(i)
    }
    return total % this.table.length
}

// 使用霍纳算法的更好的散列函数
HashTable.prototype.betterHash = function (string) {
    const H = 37
    var total = 0
    for (var i = 0; i < string.length; i++) {
        total += H * total + string.charCodeAt(i)
    }
    total %= this.table.length
    if (total < 0){
        total += this.table.length - 1
    }
    return parseInt(total)
}


HashTable.prototype.put = function (data) {
    // var hash = this.simpleHash(data)
    var hash = this.betterHash(data)
    this.table[hash] = data
}

HashTable.prototype.show = function () {
    for (var i = 0; i < this.table.length; i++) {
        if (this.table[i] !== undefined) {
            console.log(i + ': ' + this.table[i])
        }
    }
}

// var ht = new HashTable()

// var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]

// someNames.forEach(function(item){
//     ht.put(item)
// })
// ht.show()

module.exports = HashTable