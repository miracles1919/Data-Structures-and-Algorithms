/**
 * 记录一组数据集中不同成绩出现的次数
 */

var BST = require('./bst')
var readline = require('readline')

var bst = new BST()

function getData(length) {
    var arr = []
    for (var i = 0; i < length; ++i) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr
}

function printData(arr) {
    var str = ''
    for (var i = 0; i < arr.length; ++i) {
        str += arr[i] + ' '
        if ((i + 1) % 10 === 0) {
            console.log(str)
            str = ''
        }
    }
}

var grades = getData(100)
printData(grades)

for(var i = 0; i < grades.length; i++) {
    var grade = grades[i]
    if (bst.find(grade) === null) {
        bst.insert(grade)
    } else {
        bst.update(grade)
    }
}

var rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question('请输入成绩', function(grade){
    var node = bst.find(parseInt(grade.trim()))
    if (node === null) {
        console.log('没有此成绩')
    }
    console.log('该成绩出现次数:' + node.count)
    rl.close()
})

rl.on("close", function(){
    // 结束程序
    process.exit(0)
})
