function solution(n,edges) {
    let edgeMap = new Map
    let bfs = []
    let infectionNum = []

    edges.forEach(edge=> {
        if(edgeMap.get(edge[0])===undefined){
            edgeMap.set(edge[0],[])
        }
        edgeMap.get(edge[0]).push(edge[1])
    });

    let num = edgeMap.get(0).length
    let tmp = 0
    let bfsCopy = []
    edgeMap.get(0).forEach(node => bfs.push(node))
    bfsCopy = [...bfs] 

    for(let j=0;j<num;j++){
        if(j!==0) bfsCopy.push(tmp)
        tmp = bfsCopy.shift()

        // console.log(bfs)
        console.log(bfsCopy)

        bfs = [...bfsCopy]
        let infection = 0

        while(bfs.length!==0){
            let bfsCopy2 = [...bfs]
            
            let count =bfs.length 

            for(let i  =0; i< count ;i++){
                let pickNode = bfs.shift()
                if( edgeMap.get(pickNode)!==undefined) edgeMap.get(pickNode).forEach(node => {
                    bfs.push(node)
                    infection++
                })
            }
        }
        infectionNum.push(infection)

    }

    console.log(infectionNum)
    return Math.min.apply(null, infectionNum);
}




const edges = [[0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [2, 6], [3, 7], [3, 8], [3, 9], [4, 10], [4, 11], [5, 12], [5, 13], [6, 14], [6, 15], [6, 16], [8, 17], [8, 18]]
const n = 19

console.log(solution(n,edges))