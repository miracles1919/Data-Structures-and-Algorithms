function Set() {
    this.data = []
}

Object.defineProperty(Set.prototype, 'size', {
    get: function () {
        return this.data.length
    }
})

Set.prototype.add = function (data) {
    if (this.data.indexOf(data) === -1){
        this.data.push(data)
        return true
    }
    return false
}

Set.prototype.remove = function (data) {
    var index = this.data.indexOf(data)
    if (index >= 0){
        this.data.splice(index, 1)
        return true
    }
    return false
}

Set.prototype.show = function () {
    console.log(this.data) 
}

Set.prototype.contains = function (data) {
    if (this.data.indexOf(data) !== -1) {
        return true
    }
    return false
}

// 并集
Set.prototype.union = function (set) {
    var newSet = new Set()
    for (var i = 0; i < this.data.length; i++) {
        newSet.add(this.data[i])
    }
    for (var i = 0; i < set.data.length; i++) {
        if (!newSet.contains(set.data[i])){
            newSet.add(set.data[i])
        }
    }
    return newSet
}

// 交集
Set.prototype.intersect = function (set) {
    var newSet = new Set()
    for (var i = 0; i < this.data.length; i++) {
        if (set.contains(this.data[i])) {
            newSet.add(this.data[i])
        }
    }
    return newSet
}

// 是否为子集
Set.prototype.subset = function (set) {
    if (this.size > set.size) {
        return false
    }
    this.data.forEach(function(item){
        if (!set.contains(item)) {
            return false
        }
    })
    return true
}

module.exports = Set