/**
 * 图
 */

function Vertex(label) {
    this.label = label
}

function Graph(v) {
    this.vertices = v   // 顶点数
    var vertexList = []
    this.edges = 0      // 边
    this.adj = []
    this.edgeTo = []
    this.marked = []

    for (var i = 0; i < this.vertices; i++) {
        this.adj[i] = []
        this.edgeTo[i] = []
        this.marked[i] = false
    }
}

Graph.prototype.addEdge = function (v, w) {
    this.adj[v].push(w)
    this.adj[w].push(v)
    this.edges ++
}

Graph.prototype.showGraph = function () {
    for (var i = 0; i < this.vertices; i++) {
        var str = i + ' -> '
        for (var j = 0; j < this.adj[i].length; j++) {
            if (this.adj[i][j] !== undefined) {
                str += this.adj[i][j] + ' '
            }
        }
        console.log(str)
    }
}

// 深度优先搜索
Graph.prototype.depthFirstSearch = function (v) {
    var self = this
    this.marked[v] = true
    if (this.adj[v] !== undefined) {
        console.log('visited vertex: ' + v)
    }
    this.adj[v].forEach(function(item) {
        if (!self.marked[item]) {
            self.depthFirstSearch(item)
        }
    })
}

// 广度优先搜索
Graph.prototype.breadthFirstSearch = function (s) {
    var queue = []
    this.marked[s] = true
    queue.push(s)
    var self = this
    while(queue.length > 0) {
        
        var v = queue.shift()
        if (v !== undefined) {
            console.log('visited vertex: ' + v)
        }
        this.adj[v].forEach(function(item) {
            if (!self.marked[item]) {
                self.edgeTo[item] = v
                self.marked[item] = true
                queue.push(item)
            }
        })
    }
}

// 最短路径
Graph.prototype.pathTo = function (v) {
    var source = 0
    var path = []
    if (!this.hasPathTo(v)){
        return
    }
    for (var i = v; i !== source; i = this.edgeTo[i]) {
        path.push(i)
    }
    path.push(source)
    return path
}

Graph.prototype.hasPathTo = function (v) {
    return this.marked[v]
}

// 拓扑排序
Graph.prototype.topSort = function () {
    var stack = []
    var visited = []
    for (var i = 0; i < this.vertices; i++) {
        visited[i] = false
    }
    for (var i = 0; i < this.vertices; i++) {
        if (!visited[i]) {
            this.topSortHelper(i, visited, stack)
        }
    }
    console.log(stack)
    for (var i = 0; i < stack.length; i++) {
        if (stack[i] !== false) {
            console.log(this.vertexList[stack[i]])
        }
    }
}

Graph.prototype.topSortHelper = function (v, visited, stack) {
    visited[v] = true
    var self = this
    this.adj[v].forEach(function(item){
        if(!visited[item]){
            self.topSortHelper(item, visited, stack)
        }
    })
    stack.push(v)
}

Graph.prototype.showGraphTopSort = function () {
    var visited = []
    for (var i = 0; i < this.vertices; i++) {
        var str = this.vertexList[i] + ' -> '
        visited.push(this.vertexList[i])
        for (var j = 0; j < this.adj[i].length; j++) {
            if (this.adj[i][j] !== undefined) {
                if (visited.indexOf(this.vertexList[j]) === -1) {
                    str += this.vertexList[j] + ' '
                }
            }
        }
        console.log(str)
        visited.pop()
    }
}

module.exports = Graph

// var graph = new Graph(6)
// graph.addEdge(0, 1)
// graph.addEdge(1, 2)
// graph.addEdge(2, 5)
// graph.addEdge(1, 4)
// graph.addEdge(1, 3)

// graph.showGraph()
// graph.depthFirstSearch(0)
// graph.breadthFirstSearch(0)

// console.log(graph.pathTo(4).join(' -> '))


// graph.vertexList = ["CS1", "CS2", "Data Structures", "Assembly Language", "Operating Systems", "Algorithms"]
// graph.topSort()
// graph.showGraphTopSort()