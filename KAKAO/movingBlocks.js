`
문제:
로봇개발자 무지는 한 달 앞으로 다가온 카카오배 로봇경진대회에 출품할 로봇을 준비하고 있습니다.
준비 중인 로봇은 2 x 1 크기의 로봇으로 무지는 0과 1로 이루어진 N x N 크기의 지도에서 
2 x 1 크기인 로봇을 움직여 (N, N) 위치까지 이동 할 수 있도록 프로그래밍을 하려고 합니다.
로봇이 이동하는 지도는 가장 왼쪽, 상단의 좌표를 (1, 1)로 하며 지도 내에 표시된 숫자 0은 빈칸을 1은 벽을 나타냅니다. 
로봇은 벽이 있는 칸 또는 지도 밖으로는 이동할 수 없습니다. 
로봇은 처음에 아래 그림과 같이 좌표 (1, 1) 위치에서 가로방향으로 놓여있는 상태로 시작하며, 앞뒤 구분없이 움직일 수 있습니다.

로봇이 움직일 때는 현재 놓여있는 상태를 유지하면서 이동합니다. 
예를 들어, 위 그림에서 오른쪽으로 한 칸 이동한다면 (1, 2), (1, 3) 두 칸을 차지하게 되며, 
아래로 이동한다면 (2, 1), (2, 2) 두 칸을 차지하게 됩니다. 
로봇이 차지하는 두 칸 중 어느 한 칸이라도 (N, N) 위치에 도착하면 됩니다.
로봇은 다음과 같이 조건에 따라 회전이 가능합니다.

위 그림과 같이 로봇은 90도씩 회전할 수 있습니다. 
단, 로봇이 차지하는 두 칸 중, 어느 칸이든 축이 될 수 있지만, 
회전하는 방향(축이 되는 칸으로부터 대각선 방향에 있는 칸)에는 벽이 없어야 합니다.
로봇이 한 칸 이동하거나 90도 회전하는 데는 걸리는 시간은 정확히 1초 입니다.
0과 1로 이루어진 지도인 board가 주어질 때, 
로봇이 (N, N) 위치까지 이동하는데 필요한 최소 시간을 return 하도록 solution 함수를 완성해주세요.

제한사항:
board의 한 변의 길이는 5 이상 100 이하입니다.
board의 원소는 0 또는 1입니다.
로봇이 처음에 놓여 있는 칸 (1, 1), (1, 2)는 항상 0으로 주어집니다.
로봇이 항상 목적지에 도착할 수 있는 경우만 입력으로 주어집니다.

입출력 예
board	                                                                              result
[[0, 0, 0, 1, 1],[0, 0, 0, 1, 0],[0, 1, 0, 1, 1],[1, 1, 0, 0, 1],[0, 0, 0, 0, 0]]	  7
`

function solution(board) {
    let answer = Infinity;
    let visited = []
    for(let i=0; i<board.length;i++){
        let tmp = new Array(board.length).fill(0)
        visited.push(tmp)
    }
    let tmp = movingBlock(board,0,1,0,3)

    console.log(tmp)
    if(answer>tmp) answer = tmp
    return answer;

}

function inBoard(board,point1_x,point1_y,num1,num2){
    // console.log('point1_x+num1',point1_x+num1)
    // console.log('point1_y+num2',point1_y+num2)
    if(board.length>point1_x+num1 && board.length>point1_y+num2 && point1_x+num1> -1 && point1_y+num2> -1) return true
    else false
}

function checkMovingInBoard(board,point1_x,point1_y,position){
    // console.log('이동실행')
    //상하좌우
    let arrow=[[-1,0],[1,0],[0,-1],[0,1]]
    let num = arrow[position]
    if(board.length>point1_x+num[0] && board.length>point1_y+num[1] && board[point1_x+num[0]][point1_y+num[1]]===0) return true
    else false 
}

function checkRotationInBoard(board,point1_x,point1_y,position,rt){
    // console.log('로테실행')

    let rota=[
                [
                    [
                        [0,-1],[1,-1],
                    ],
                    [
                        [0,1],[1,1]
                    ]
                      
                ],
                [
                    [
                        [-1,-1],[0,-1],
                    ],
                    [
                        [-1,1],[0,1]
                    ]
                      
                ],
                [
                    [
                        [-1,0],[-1,1],
                    ],
                    [
                        [1,0],[1,1]
                    ]
                      
                ],
                [
                    [
                        [-1,-1],[-1,0],
                    ],
                    [
                        [1,-1],[1,0]
                    ]
                ],
            ]
            // console.log('s',point1_x , rota[position][rt][0][0], point1_y , rota[position][rt][0][1])
            // console.log('s',point1_x , rota[position][rt][1][0], point1_y , rota[position][rt][1][1])

    if(inBoard(board,point1_x,point1_y,rota[position][rt][0][0],rota[position][rt][0][1]) && 
        inBoard(board,point1_x,point1_y,rota[position][rt][1][0],rota[position][rt][1][1])){
        // console.log('ss',point1_x , rota[position][rt][0][0], point1_y , rota[position][rt][0][1])
        // console.log('ss',point1_x , rota[position][rt][1][0], point1_y , rota[position][rt][1][1])
        if( board[point1_x + rota[position][rt][0][0]][point1_y + rota[position][rt][0][1]] ===0 &&
            board[point1_x + rota[position][rt][1][0]][point1_y + rota[position][rt][1][1]] ===0
        )
       
        {console.log('ss')

            return true
        }
    }
    else {

        
        return false
    }
    // if(position===0){
    //     if(board[point1_x + rota[position][rt][0][0]===0&&board[point1_y + rota[position][rt][0][1]]] &&
    //         board[point1_x + rota[position][rt][1][0]===0&&board[point1_y + rota[position][rt][1][1]]]
    //     )return true
    //     else false
    // }
    // else if(position===1){
    //     if(board[point1_x + rota[position][rt][0][0]===0&&board[point1_y + rota[position][rt][0][1]]] &&
    //         board[point1_x + rota[position][rt][1][0]===0&&board[point1_y + rota[position][rt][1][1]]]
    //     )return true
    //     else false
    // }
    // else if(position===2){
    //     if(board[point1_x + rota[position][rt][0][0]===0&&board[point1_y + rota[position][rt][0][1]]] &&
    //         board[point1_x + rota[position][rt][1][0]===0&&board[point1_y + rota[position][rt][1][1]]]
    //     )return true
    //     else false
    // }
    // else if(position===3){
    //     if(board[point1_x + rota[position][rt][0][0]===0&&board[point1_y + rota[position][rt][0][1]]] &&
    //         board[poin_t1x + rota[position][rt][1][0]===0&&board[point1_y + rota[position][rt][1][1]]]
    //     )return true
    //     else false
    // }
}

function movingBlock(board,point1_x,point1_y,time){
    let queueBlock = []
    queueBlock.push([point1_x,point1_y,target])
    while(queueBlock.length!==0){

        console.log('a',queueBlock)
        const tmp = queueBlock.shift()
        const x1 = tmp[0]
        const y1 = tmp[1]
        const target = tmp[2]
        
        time++

        if(board.length-1===x1&&board.length-1===y1) return time

        if(target===0){
            //상 이동
            if(checkMovingInBoard(board,x1,y1,0)) queueBlock.push([x1-1,y1,0])
            //회전
            if(checkRotationInBoard(board,x1,y1,0,0))queueBlock.push([x1+1,y1-1,3])
            if(checkRotationInBoard(board,x1,y1,0,1))queueBlock.push([x1-1,y1,2])

        }
        if(target===1){
            //하 이동
            if(checkMovingInBoard(board,x1,y1,1)) queueBlock.push([x1+1,y1,1])
            //회전
            if(checkRotationInBoard(board,x1,y1,1,0))queueBlock.push([x1+1,y1+1,2])
            if(checkRotationInBoard(board,x1,y1,1,1))queueBlock.push([x1-1,y1+1,3])

        }
        if(target===2){
            if(checkMovingInBoard(board,x1,y1,2)) queueBlock.push([x1,y1-1,2])
            //회전
            if(checkRotationInBoard(board,x1,y1,2,0))queueBlock.push([x1-1,y1+1,0])
            if(checkRotationInBoard(board,x1,y1,2,1))queueBlock.push([x1+1,y1+1,1])
        }
        if(target===3){
            if(checkMovingInBoard(board,x1,y1,3)) queueBlock.push([x1,y1+1,3])
            //회전
            if(checkRotationInBoard(board,x1,y1,3,0))queueBlock.push([x1-1,y1-1,0])
            if(checkRotationInBoard(board,x1,y1,3,1))queueBlock.push([x1+1,y1-1,1])
        
        }
        //상하좌우 이동

        //회전


    }
    // if(board.length-1===point2_x&&board.length-1===point2_y) return time

    // //가로
    // if(board.length-1>point1_x  && board.length-1>point1_y && board.length-1>point2_x && board.length-1>point2_y &&visited[point2_x][point2_y+1]!==2 && board[point2_x][point2_y+1]!==2 && point1_x===point2_x && board[point2_x][point2_y+1]===0){
    //     visited[point2_x][point2_y+1]=2
    //     movingBlock(board,visited,point2_x,point2_y,point2_x,point2_y+1,time+1)
       
    // }
    // console.log('sa')
    // if(board.length-1>point1_x  && board.length-1>point1_y && board.length-1>point2_x && board.length-1>point2_y &&visited[point2_x+1][point2_y-1]!==2 && point1_x===point2_x &&  board[point1_x+1][point1_y]===0 && board[point2_x+1][point2_y]===0) {
    // visited[point2_x+1][point2_y-1]=2
    //     movingBlock(board,visited,point1_x,point1_y,point2_x+1,point2_y-1,time+1)
    // }
    // if(board.length-1>point1_x  && board.length-1>point1_y && board.length-1>point2_x && board.length-1>point2_y &&visited[point1_x+1][point1_y+1]!==2 && point1_x===point2_x && board[point1_x+1][point1_y]===0 && board[point2_x+1][point2_y]===0) {
    //     visited[point1_x+1][point1_y+1]=2
    //     movingBlock(board,visited,point2_x,point2_y,point1_x+1,point1_y+1,time+1)
    // }
    // //세로
    // if(board.length-1>point1_x  && board.length-1>point1_y && board.length-1>point2_x && board.length-1>point2_y &&visited[point1_x+1][point1_y]!==2 && point1_y===point2_y && board[point2_x+1][point2_y]===0){
    //     visited[point1_x+1][point1_y]=2
    //     movingBlock(board,visited,point2_x,point2_y,point2_x+1,point2_y,time+1)
    // }
    // if(board.length-1>point1_x  && board.length-1>point1_y && board.length-1>point2_x && board.length-1>point2_y &&visited[point2_y][point2_x]!==2 !== point1_y===point2_y && board[point1_x][point1_y+1]===0 && board[point2_x][point2_y+1]===0) {
    //     visited[point2_x-1][point2_y+1]=2
    //     movingBlock(board,visited,point1_x,point1_y,point2_x-1,point2_y+1,time+1)
    // }
    // console.log('sas')
    // if(board.length-1>point1_x  && board.length-1>point1_y && board.length-1>point2_x && board.length-1>point2_y &&visited[point1_x+1][point1_y+1]!==2 && point1_y===point2_y &&  board[point1_x][point1_y+1]===0 && board[point2_x][point2_y+1]===0) {
    //     visited[point1_x+1][point1_y+1]=2
    //     movingBlock(board,visited,point2_x,point2_y,point1_x+1,point1_y+1,time+1)
    // }
}

const board= [[0, 0, 0, 1, 1],[0, 0, 0, 1, 0],[0, 1, 0, 1, 1],[1, 1, 0, 0, 1],[0, 0, 0, 0, 0]]
solution(board)

// board.length-1>point1_x  && board.length-1>point1_y && board.length-1>point2_x && board.length-1>point2_y &&