`
문제 : 
블라인드 공채를 통과한 신입 사원 라이언은 신규 게임 개발 업무를 맡게 되었다. 이번에 출시할 게임 제목은 프렌즈4블록.
같은 모양의 카카오프렌즈 블록이 2×2 형태로 4개가 붙어있을 경우 사라지면서 점수를 얻는 게임이다.

만약 판이 위와 같이 주어질 경우, 라이언이 2×2로 배치된 7개 블록과 콘이 2×2로 배치된 4개 블록이 지워진다. 같은 블록은 여러 2×2에 포함될 수 있으며, 지워지는 조건에 만족하는 2×2 모양이 여러 개 있다면 한꺼번에 지워진다.

블록이 지워진 후에 위에 있는 블록이 아래로 떨어져 빈 공간을 채우게 된다.

입력 형식 :
입력으로 판의 높이 m, 폭 n과 판의 배치 정보 board가 들어온다.
2 ≦ n, m ≦ 30
board는 길이 n인 문자열 m개의 배열로 주어진다. 블록을 나타내는 문자는 대문자 A에서 Z가 사용된다.

입출력 : 
m	    n	   board	                                                  answer
4	    5	   [CCBDE, AAADE, AAABF, CCBBF]	                              14
6	    6	   [TTTANT, RRFACC, RRRFCC, TRRRAA, TTMMMF, TMMTTJ]	          15

`

// function solution(m, n, board) {
//     let answer = 0;
//     let change = false
//     let visited = []
//     let newBoard = []


//     for(let i=0;i<board.length;i++){
//         let tmp =[]
//         for(let j=0;j<board[0].length;j++){
//             tmp.push(0)
//         }
//         visited.push(tmp)
//     }
//     for(let i=0;i<board.length;i++){
//         newBoard.push(board[i].split(''))
//     }
//     console.log(newBoard)

//     // fourBlock(1,0,visited,newBoard)

//     // while(!change){
//         for (let i = 0; i < board.length-1; i++) {
//             for (let j = 0; j < board[0].length-1; j++) {
//                 let char = newBoard[i][j]

//                 if(char!==0&&newBoard[i][j+1]===char&&newBoard[i+1][j]===char&&newBoard[i+1][j+1]===char){
//                     console.log('i',i,'j',j)
//                     fourBlock(i,j,visited,newBoard)
//                     console.log(newBoard)
//                     i=0
//                     j=0
//                 }
                
//             }
            
//         }
//     // }
//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[0].length; j++) {
//             if(newBoard[i][j]===0) answer++
//         }
        
//     }

//     return answer;
// }

// function fourBlock(x,y,visited,arr) {
//     const xDir = [1,1,0]
//     const yDir = [0,1,1]
//     const character = arr[x][y]
//     // let sameChar = true
//     // let sameCharNum = 1
//     let visitedCopy = []
//     // console.log('vw',visited)
    
//     for(let i=0;i<arr.length;i++){
//         let tmp =[]
//         for(let j=0;j<arr[0].length;j++){
//             tmp.push(0)
//         }
//         visitedCopy.push(tmp)
//     }

//     visitedCopy[x][y] = 1
//     // console.log('va',visitedCopy)
    
//     // while(sameChar){
//         let sameChar = true
//         for(let i=0;i<3;i++){
//             const moveX = x+xDir[i]
//             const moveY = y+yDir[i]
//             if(arr.length>moveX && arr[0].length>moveY){
//                 if(arr[moveX][moveY]!==character || arr[moveX][moveY]===0)
//                     sameChar = false 
//                     // if(visited[moveX][moveY] === 0) {
//                         // bfs(moveX,moveY,visitedCopy,arr)
//                     // }

//                 // }
//                 // else
//             }
//         }
//         if(sameChar){
//             for(let i=0;i<3;i++){
//                 const moveX = x+xDir[i]
//                 const moveY = y+yDir[i]
//                 if(arr.length>moveX && arr[0].length>moveY){
//                     visited[moveX][moveY] = 1
//                     bfs(moveX,moveY,visitedCopy,arr)
//                 }
//             }
//         }
//     // }
    
//     // console.log(visitedCopy)
//     // console.log('vo',visitedCopy)
//     moveBlock(visitedCopy,arr)
//     // return visitedCopy
// }

// function bfs(x,y,visited,arr) {
//     const xDir = [1,1,0]
//     const yDir = [0,1,1]
//     const character = arr[x][y]
//     // let sameChar = true
//     let sameCharNum = 1

//     // console.log(visited)
//     visited[x][y] = 1
    
//     // while(sameChar){
//         let sameChar = true
//         for(let i=0;i<3;i++){
//             const moveX = x+xDir[i]
//             const moveY = y+yDir[i]
            
//             if(arr.length>moveX && arr[0].length>moveY){
//                 if(arr[moveX][moveY]!==character || arr[moveX][moveY]===0)
//                     // if(visited[moveX][moveY] === 0) {
//                         // bfs(moveX,moveY,visitedCopy,arr)
//                     // }

//                 // }
//                 sameChar = false 
//             }
//         }
//         if(sameChar){
//             for(let i=0;i<3;i++){
//                 const moveX = x+xDir[i]
//                 const moveY = y+yDir[i]
//                 if(arr.length>moveX && arr[0].length>moveY){
//                     visited[moveX][moveY] = 1
//                     bfs(moveX,moveY,visited,arr)
//                 }
//             }
//         }
//     // }

//     // return visitedCopy
// }

// function moveBlock(visitedCopy,arr){

//     let moveArr = []

//     for(let i=0;i<arr.length;i++){
//         let tmp =[]
//         for(let j=0;j<arr[0].length;j++){
//             tmp.push(0)
//         }
//         moveArr.push(tmp)
//     }

//     for(let i=0;i<visitedCopy.length;i++){
//         // true;et 
//         for(let j=0;j<visitedCopy[0].length;j++){
//             for(let z=i;z<visitedCopy.length;z++){
//                 if(visitedCopy[i][j]===1){
//                     moveArr[i][j] =-1
//                     break
//                 }
//                 else if(visitedCopy[z][j]===1){
//                     moveArr[i][j] +=1
//                 }
//             }
//         }
//     }

//     console.log(moveArr)
//     for(let i=visitedCopy.length-1;i>=0;i--){
//         for(let j=0;j<visitedCopy[0].length;j++){
//             if(moveArr[i][j]===-1)arr[i][j] = 0
//             else if(moveArr[i][j]>0){
//                 arr[i+moveArr[i][j]][j] = arr[i][j]
//                 arr[i][j] = 0
//             }
//         }
//     }


// }

function solution(m, n, board) {
    board = board.map(v => v.split(''));

    // console.log(board)
    while (true) {
        let founded = [];

        // 찾기 - 네 개중 우측 하단 모서리 인덱스 기준
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                if (board[i][j] && board[i][j] === board[i][j - 1] && board[i][j] === board[i - 1][j - 1] && board[i][j] === board[i - 1][j]) {
                    founded.push([i, j]);
                }
            }
        }
        
        // console.log(board)
        if (! founded.length) 
          return [].concat(...board).filter(v => ! v).length;

        // 부수기 - 지워질 것 0으로 채우기
        founded.forEach(a => {
            board[a[0]][a[1]] = 0;
            board[a[0]][a[1] - 1] = 0;
            board[a[0] - 1][a[1] - 1] = 0;
            board[a[0] - 1][a[1]] = 0;
        });

        for (let i = m - 1; i > 0; i--) {
            if (! board[i].some(v => ! v)) continue;

            for (let j = 0; j < n; j++) {
                for (let k = i - 1; k >= 0 && ! board[i][j]; k--) {
                    if (board[k][j]) {
                        board[i][j] = board[k][j];
                        board[k][j] = 0;
                        break;
                    }
                }
            }
        }
    }
}

// const m=4  
// const n=5
// const board=["CCBDE", "AAADE", "AAABF", "CCBBF"]
// const m=4  
// const n=5
// const board=["BB","AA","AA","BB"]

const m=6  
const n=6
const board=["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]

console.log(solution(m, n, board))