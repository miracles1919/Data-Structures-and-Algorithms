/**
 * 测试最短路径
 */

var Graph = require('./graph')

var config = {
    0: '慈城',
    1: '331',
    2: '337',
    3: '26',
    4: '14',
    5: '1号线',
    6: '630',
    7: '50',
    8: '817',
    9: '集市港'
}

var graph = new Graph(10)

graph.addEdge(0, 1)
graph.addEdge(1, 5)
graph.addEdge(5, 6)
graph.addEdge(6, 9)

graph.addEdge(0, 3)
graph.addEdge(3, 7)
graph.addEdge(7, 9)

graph.addEdge(0, 8)
graph.addEdge(8, 6)
graph.addEdge(6, 9)

graph.addEdge(0, 2)
graph.addEdge(2, 4)
graph.addEdge(4, 5)

graph.breadthFirstSearch(0)
console.log(graph.pathTo(9))


