//다음과 같이 리스트 형태로 노드들의 연결 관계가 주어진다고 할 때 깊이 우선 탐색으로 이 노드들을 탐색했을 때의 순서를 공백으로 구분하여 출력하세요.

const graph = 
{'E': ['D', 'A'],
'F': ['D'],
'A': ['E', 'C', 'B'],
'B': ['A'],
'C': ['A'],
'D': ['E','F']}

function dfs(graph, start){
    let visited = [];
    let stack = [start];
  
    while (stack.length !== 0){
      let n = stack.pop();
      if (!visited.includes(n)){
        visited.push(n);
        let sub = graph[n].filter(x => !visited.includes(x));
        for(let i of sub) {
          stack.push(i);
        }
      }
    }
    return visited;
  }
  
  
  console.log(dfs(graph, 'E'));
  
// const dfs = graph => {
//     let graphDfs = []
//     let nodes = []

//     for(i in graph) {
//         nodes.push(i)
//     }   
//     for(i in graph) {
//         for(j in graph[i]){
//             if(nodes.indexOf(graph[i][j]) !== -1) {
//                 graphDfs.push(graph[i][j])
//                 delete nodes[nodes.indexOf(graph[i][j])]
//             }
//         }
//     }   
    
//     return graphDfs
// }


// console.log(dfs(graph))