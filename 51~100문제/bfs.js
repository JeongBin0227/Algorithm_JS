//너비 우선 탐색을 한 순서대로 노드의 인덱스를 공백 구분으로 출력하세요.

function bfs(graph,start) {
    let visited = []
    let queue = [start]

    while(queue.length !== 0 ){
        let tmp = queue.shift()

        if(!visited.includes(tmp)) {
            visited.push(tmp)
            for(let node of graph[tmp]){
                if(!visited.includes(node)) queue.push(node)
            }
        }
    }
    return visited
}

const graph = 
{'E': ['D', 'A'],
'F': ['D'],
'A': ['E', 'C', 'B'],
'B': ['A'],
'C': ['A'],
'D': ['E','F']}

console.log(bfs(graph,'E'))