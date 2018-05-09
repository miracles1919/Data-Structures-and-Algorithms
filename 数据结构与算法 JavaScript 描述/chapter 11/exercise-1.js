/**
 * 测试广度优先和深度优先
 */

var Graph = require('./graph')

function getTime(fun) {
    var start = new Date().getTime()
    fun()
    var end = new Date().getTime()
    var elapsed = end - start
    console.log('消耗时间：' + elapsed + 'ms')
}

function dfs() {
    var graph = new Graph(10)
    graph.addEdge(0, 1)  
    graph.addEdge(0, 2)  
    graph.addEdge(1, 3)  
    graph.addEdge(1, 4)  
    graph.addEdge(3, 6)  
    graph.addEdge(3, 8)  
    graph.addEdge(5, 8)  
    graph.addEdge(2, 5)
    graph.addEdge(6, 7) 
    graph.addEdge(4, 7) 
    graph.addEdge(8, 9) 
    graph.depthFirstSearch(0)
}

function bfs() {
    var graph = new Graph(10)
    graph.addEdge(0, 1)  
    graph.addEdge(0, 2)  
    graph.addEdge(1, 3)  
    graph.addEdge(1, 4)  
    graph.addEdge(3, 6)  
    graph.addEdge(3, 8)  
    graph.addEdge(5, 8)  
    graph.addEdge(2, 5)
    graph.addEdge(6, 7) 
    graph.addEdge(4, 7) 
    graph.addEdge(8, 9) 
    graph.depthFirstSearch(0)
}

getTime(dfs)

getTime(bfs)
