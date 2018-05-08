/**
 * Binary Search Tree
 */

function Node(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
    this.count = 1
}

Node.prototype.show = function () {
    return this.data
}

function BST () {
    this.root = null
}

BST.prototype.insert = function (data) {
    var node = new Node(data, null, null)
    if(this.root === null) {
        this.root = node
    } else {
        var current = this.root
        while(true) {
            if(data < current.data) {
                if (current.left === null) {
                    current.left = node
                    break
                } else {
                    current = current.left
                }
            } else {
                if (current.right === null) {
                    current.right = node
                    break
                } else {
                    current = current.right
                }
            }
        }
        
    }
}

// 中序
BST.prototype.inOrder = function (node) {
    if (node !== null) {
        this.inOrder(node.left)
        console.log(node.show() + ' ')
        this.inOrder(node.right)
    }
}

// 先序
BST.prototype.preOrder = function (node) {
    if (node !== null) {
        console.log(node.show() + ' ')
        this.inOrder(node.left)
        this.inOrder(node.right)
    }
}

// 后序
BST.prototype.postOrder = function (node) {
    if (node !== null) {
        this.inOrder(node.left)
        this.inOrder(node.right)
        console.log(node.show() + ' ')
    }
}

BST.prototype.getMin = function () {
    var current = this.root
    while (current.left !== null) {
        current = current.left
    }
    return current.data
}

BST.prototype.getMax = function () {
    var current = this.root
    while (current.right !== null) {
        current = current.right
    }
    return current.data
}

BST.prototype.find = function (data) {
    var current = this.root
    while (current !== null) {
        if (data === current.data) {
            return current
        } else if (data < current.data) {
            current = current.left
        } else {
            current = current.right
        }
    }
    return null
}

BST.prototype.update = function (data) {
    var node = this.find(data)
    node.count ++
    return node
}

// 如果待删除节点包含两个子节点，两种做法（任选一种）
// 1、查找待删除节点左子树的最大值
// 2、查找待删除节点右子树的最小值

BST.prototype.remove = function (data) {
    this.root = this.removeNode(this.root, data)
}

function getMinNode (node) {
    var current = node
    while (current.left !== null) {
        current = current.left
    }
    return current
}

BST.prototype.removeNode = function (node, data) {
    if (node === null) {
        return null
    }
    
    if (data === node.data) {
        // 没有子节点
        if (node.left === null && node.right === null) {
            return null
        }

        // 没有左子节点的节点
        if (node.left === null) {
            return node.right
        }

        // 没有右子节点的节点
        if (node.right === null) {
            return node.left
        }

        // 包含两个子节点
        var tempNode = getMinNode(node.right)
        node.data = tempNode.data
        node.right = this.removeNode(node.right, tempNode.data)
        return node

    } else if (data < node.data) {
        node.left = this.removeNode(node.left, data)
        return node
    } else {
        node.right = this.removeNode(node.right, data)
        return node
    }
}

// var bst = new BST()
// bst.insert(23)
// bst.insert(45)
// bst.insert(16)
// bst.insert(37)
// bst.insert(3)
// bst.insert(99)
// bst.insert(22)
// bst.inOrder(bst.root)
// console.log('--------')
// bst.preOrder(bst.root)
// console.log('--------')
// bst.postOrder(bst.root)

// console.log('min', bst.getMin())
// console.log('max', bst.getMax())

// console.log('---------remove---------')
// bst.remove(45)
// bst.preOrder(bst.root)

module.exports = BST