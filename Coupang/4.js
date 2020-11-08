function solution(depar, hub, dest, roads) {
    let roadTree = {}
    let hubCount = 0
    let destCount = 0
    let bfs = []

    roads.forEach(road => {
        if(!roadTree.hasOwnProperty(road[0])) roadTree[road[0]] = []
        roadTree[road[0]].push(road[1])
    });

    roadTree[depar].forEach(country => bfs.push(country))

    while(bfs.length!==0){
        let length = bfs.length
        for(let i =0;i<length;i++){
            let country = bfs.shift()
            if(country===hub)hubCount++ 
            else if(roadTree[country]!==undefined) roadTree[country].forEach(country => bfs.push(country))
        }
    }

    roadTree[hub].forEach(country => bfs.push(country))

    while(bfs.length!==0){
        let length = bfs.length
        for(let i =0;i<length;i++){
            let country = bfs.shift()
            if(country===dest)destCount++ 
            else if(roadTree[country]!==undefined) roadTree[country].forEach(country => bfs.push(country))
        }
    }

    
    return hubCount * destCount
}

function dfs(roadTree,dfsNode,visitedCountry , hub, dest) {
    let length = roadTree.length
    if(roadTree.length===0) 
    
    for(let i=0;i<length;i++){
        let visted = visitedCountry.splice(0)
        let tmpNode = dfsNode.shift()

        if(tmpNode===dest){
            visted.push(dest)
            console.log(visted)
        }
        if(roadTree[tmpNode]!==undefined) roadTree[tmpNode].forEach(country => dfs.push(country))

        dfs(roadTree,dfsNode,visted,hub, dest)
    }
    
}

const depar = 'SEOUL'
const hub = 'DAEGU'
const dest = 'YEOSU'
const roads = [["ULSAN","BUSAN"],["DAEJEON","ULSAN"],["DAEJEON","GWANGJU"],["SEOUL","DAEJEON"],["SEOUL","ULSAN"],["DAEJEON","DAEGU"],["GWANGJU","BUSAN"],["DAEGU","GWANGJU"],["DAEGU","BUSAN"],["ULSAN","DAEGU"],["GWANGJU","YEOSU"],["BUSAN","YEOSU"]]

console.log(solution(depar, hub, dest, roads))