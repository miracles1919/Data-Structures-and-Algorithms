var BST = require('./bst')

// 计算节点个数

function nodeNum (node) {
    var num = 0
    if (node !== null) {
        num += 1 + nodeNum(node.left) + nodeNum(node.right)
    } else {
        return 0
    }
    return num
}

var bst = new BST()
bst.insert(23)
bst.insert(45)
bst.insert(16)
bst.insert(37)
bst.insert(3)
bst.insert(99)
bst.insert(22)

console.log(nodeNum(bst.root))