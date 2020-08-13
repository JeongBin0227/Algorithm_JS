`
문제설명:
빙하가 깨지면서 스노우타운에 떠내려 온 죠르디는 인생 2막을 위해 주택 건축사업에 뛰어들기로 결심하였습니다. 죠르디는 기둥과 보를 이용하여 벽면 구조물을 자동으로 세우는 로봇을 개발할 계획인데, 그에 앞서 로봇의 동작을 시뮬레이션 할 수 있는 프로그램을 만들고 있습니다.
프로그램은 2차원 가상 벽면에 기둥과 보를 이용한 구조물을 설치할 수 있는데, 기둥과 보는 길이가 1인 선분으로 표현되며 다음과 같은 규칙을 가지고 있습니다.

기둥은 바닥 위에 있거나 보의 한쪽 끝 부분 위에 있거나, 또는 다른 기둥 위에 있어야 합니다.
보는 한쪽 끝 부분이 기둥 위에 있거나, 또는 양쪽 끝 부분이 다른 보와 동시에 연결되어 있어야 합니다.
단, 바닥은 벽면의 맨 아래 지면을 말합니다.

2차원 벽면은 n x n 크기 정사각 격자 형태이며, 각 격자는 1 x 1 크기입니다. 맨 처음 벽면은 비어있는 상태입니다. 기둥과 보는 격자선의 교차점에 걸치지 않고, 격자 칸의 각 변에 정확히 일치하도록 설치할 수 있습니다. 다음은 기둥과 보를 설치해 구조물을 만든 예시입니다.

제한사항:
n은 5 이상 100 이하인 자연수입니다.
build_frame의 세로(행) 길이는 1 이상 1,000 이하입니다.
build_frame의 가로(열) 길이는 4입니다.
build_frame의 원소는 [x, y, a, b]형태입니다.
x, y는 기둥, 보를 설치 또는 삭제할 교차점의 좌표이며, [가로 좌표, 세로 좌표] 형태입니다.
a는 설치 또는 삭제할 구조물의 종류를 나타내며, 0은 기둥, 1은 보를 나타냅니다.
b는 구조물을 설치할 지, 혹은 삭제할 지를 나타내며 0은 삭제, 1은 설치를 나타냅니다.
벽면을 벗어나게 기둥, 보를 설치하는 경우는 없습니다.
바닥에 보를 설치 하는 경우는 없습니다.
구조물은 교차점 좌표를 기준으로 보는 오른쪽, 기둥은 위쪽 방향으로 설치 또는 삭제합니다.
구조물이 겹치도록 설치하는 경우와, 없는 구조물을 삭제하는 경우는 입력으로 주어지지 않습니다.
최종 구조물의 상태는 아래 규칙에 맞춰 return 해주세요.
return 하는 배열은 가로(열) 길이가 3인 2차원 배열로, 각 구조물의 좌표를 담고있어야 합니다.
return 하는 배열의 원소는 [x, y, a] 형식입니다.
x, y는 기둥, 보의 교차점 좌표이며, [가로 좌표, 세로 좌표] 형태입니다.
기둥, 보는 교차점 좌표를 기준으로 오른쪽, 또는 위쪽 방향으로 설치되어 있음을 나타냅니다.
a는 구조물의 종류를 나타내며, 0은 기둥, 1은 보를 나타냅니다.
return 하는 배열은 x좌표 기준으로 오름차순 정렬하며, x좌표가 같을 경우 y좌표 기준으로 오름차순 정렬해주세요.
x, y좌표가 모두 같은 경우 기둥이 보보다 앞에 오면 됩니다.

입출력 예
n	build_frame	                                                                                                  result
5	[[1,0,0,1],[1,1,1,1],[2,1,0,1],[2,2,1,1],[5,0,0,1],[5,1,0,1],[4,2,1,1],[3,2,1,1]]	                          [[1,0,0],[1,1,1],[2,1,0],[2,2,1],[3,2,1],[4,2,1],[5,0,0],[5,1,0]]
5	[[0,0,0,1],[2,0,0,1],[4,0,0,1],[0,1,1,1],[1,1,1,1],[2,1,1,1],[3,1,1,1],[2,0,0,0],[1,1,1,0],[2,2,0,1]] 	      [[0,0,0],[0,1,1],[1,1,1],[2,1,1],[3,1,1],[4,0,0]]
`

// function solution(n,build_frame){
//     let answer = []
//     //1. 기둥, 보 설치 가능 조건 만들기
//     let setColumn = []
//     let setBeam = []
//     let availableColumnOfColumn = []
//     let availableBeamOfColumn = []
//     let availableColumnOfBeam = []
//     let availableBeamOfBeam = []

//     for(let i=0;i<n+1;i++){
//         if(i===0){
//             let tmp7 = new Array(n+1).fill(0)
//             let tmp8 = new Array(n+1).fill(0)
//             let tmp9 = new Array(n+1).fill(0)
//             let tmp10 = new Array(n+1).fill(0)
//             let tmp11 = new Array(n+1).fill(0)
//             let tmp2 = new Array(n+1).fill(2)
//             setColumn.push(tmp9)
//             setBeam.push(tmp7)
//             availableColumnOfColumn.push(tmp2)
//             availableBeamOfColumn.push(tmp8)
//             availableColumnOfBeam.push(tmp10)
//             availableBeamOfBeam.push(tmp11)
//         }
//         else{
//             let tmp1 = new Array(n+1).fill(0)
//             let tmp2 = new Array(n+1).fill(0)
//             let tmp3 = new Array(n+1).fill(0)
//             let tmp4 = new Array(n+1).fill(0)
//             let tmp5 = new Array(n+1).fill(0)
//             let tmp6 = new Array(n+1).fill(0)
//             setColumn.push(tmp3)
//             setBeam.push(tmp4)
//             availableColumnOfColumn.push(tmp1)
//             availableBeamOfColumn.push(tmp2)
//             availableColumnOfBeam.push(tmp5)
//             availableBeamOfBeam.push(tmp6)
//         }
//     }

//     //2. 조건 적합시 정답 배열에 넣기

//     build_frame.forEach(cl=>{
//         //1이면 넣기
//         //0이면 기둥
//         //1이면 보

//         if(cl[3]===1){
//             if(cl[2]===0){
//                 //보위에, 땅, 기둥위
//                 if((availableColumnOfColumn[cl[1]][cl[0]]===1 ||availableColumnOfColumn[cl[1]][cl[0]]===2 ||availableColumnOfBeam[cl[1]][cl[0]]===1)) {
//                     answer.push([cl[0],cl[1],cl[2]])
//                     //놓은자리
//                     setColumn[cl[1]][cl[0]] = 1
//                     // setColumn[cl[1]][cl[0]]= 2
//                     //빔 놓을수 있는자리
//                     availableColumnOfColumn[cl[1]+1][cl[0]] = 1
//                     availableBeamOfColumn[cl[1]+1][cl[0]] = 1
//                     // availableBeamOfColumn[cl[1]+1][cl[0]+1] = 1
//                     availableBeamOfColumn[cl[1]+1][cl[0]-1] = 1
//                 }
//             }
//             else{
//                 //기둥있거나 || 양쪽에 보
//                 if(availableBeamOfColumn[cl[1]][cl[0]]===1 || (availableBeamOfBeam[cl[1]][cl[0]]===1 &&setBeam[cl[1]][cl[0]+1]===1)) {
//                     answer.push([cl[0],cl[1],cl[2]])
//                     //놓은자리
//                     setBeam[cl[1]][cl[0]]=1
//                     // setBeam[cl[1]][cl[0]+1]=1
//                     // setBeam[cl[1]][cl[0]+1]=2
                    
//                     //놓을수 있는자리
//                     availableColumnOfBeam[cl[1]][cl[0]] = 1
//                     availableColumnOfBeam[cl[1]][cl[0]+1] = 1

//                     // if(setBeam[cl[1]][cl[0]+2]===1)availableBeamOfBeam[cl[1]][cl[0]+1]=1
//                     availableBeamOfBeam[cl[1]][cl[0]+1]=1
//                     if(cl[0]>1&&setBeam[cl[1]][cl[0]-2]===1)availableBeamOfBeam[cl[1]][cl[0]-1]=1
//                     // setColumn[cl[1]][cl[0]+1] = 1
//                 }
//             }
//         } 
//         //0이면 삭제
//         else {
//             //기둥
//             if(cl[2]===0){
//                 // 1. 자기 위 기둥 없는지 
//                 if( setColumn[cl[1]+1][cl[0]]!==1  ){
//                     //2.양쪽에 보없는지
//                     if(setBeam[cl[1]+1][cl[0]]===1){
//                         if(setColumn[cl[1]][cl[0]+1]===1){
//                             answer.forEach( (eachAns,index)=>{
//                                 if(eachAns[0]===cl[0]&&eachAns[1]===cl[1]&&eachAns[2]===cl[2]) answer.splice(index,1);
//                             })
//                             availableColumnOfColumn[cl[1]+1][cl[0]]=0
//                             // else availableColumnOfColumn[cl[1]][cl[0]]=0
//                             setColumn[cl[1]][cl[0]]=0
//                             availableBeamOfColumn[cl[1]+1][cl[0]]=0
//                             availableBeamOfColumn[cl[1]+1][cl[0]-1]=0
//                         }
//                         else if(setBeam[cl[1]+1][cl[0]-1]===1){
//                             answer.forEach( (eachAns,index)=>{
//                                 if(eachAns[0]===cl[0]&&eachAns[1]===cl[1]&&eachAns[2]===cl[2]) answer.splice(index,1);
//                             })
//                             availableColumnOfColumn[cl[1]+1][cl[0]]=0
//                             setColumn[cl[1]][cl[0]]=0
//                             availableBeamOfColumn[cl[1]+1][cl[0]]=0
//                             availableBeamOfColumn[cl[1]+1][cl[0]-1]=0
//                         }
//                     }
//                     else if(availableBeamOfBeam[cl[1]+1][cl[0]]===1){
//                         if(setColumn[cl[1]][cl[0]-1]===1){
//                             answer.forEach( (eachAns,index)=>{
//                                 if(eachAns[0]===cl[0]&&eachAns[1]===cl[1]&&eachAns[2]===cl[2]) answer.splice(index,1);
//                             })
//                             availableColumnOfColumn[cl[1]+1][cl[0]]=0
//                             setColumn[cl[1]][cl[0]]=0
//                             availableBeamOfColumn[cl[1]+1][cl[0]]=0
//                             availableBeamOfColumn[cl[1]+1][cl[0]-1]=0
//                         }
//                     }
//                     else{
//                         answer.forEach( (eachAns,index)=>{
//                             if(eachAns[0]===cl[0]&&eachAns[1]===cl[1]&&eachAns[2]===cl[2]) answer.splice(index,1);
//                         })
//                         if(cl[1]===0)availableColumnOfColumn[cl[1]][cl[0]]=2
//                         else availableColumnOfColumn[cl[1]][cl[0]]=0
//                         setColumn[cl[1]][cl[0]]=0
//                         availableBeamOfColumn[cl[1]+1][cl[0]]=0
//                         availableBeamOfColumn[cl[1]+1][cl[0]-1]=0
//                     }
//                     // if(cl[0]!==0){
//                     //     if(setBeam[cl[1]+1][cl[0]-1]===2){
//                     //         answer.forEach( (eachAns,index)=>{
//                     //             if(eachAns[0]===cl[0]&&eachAns[1]===cl[1]&&eachAns[2]===cl[2]) answer.splice(index,1);
//                     //         })
//                     //         if(cl[1]===0){
//                     //             setColumn[cl[1]][cl[0]]=1
//                     //             availableBeamOfColumn[cl[1]+1][cl[0]] = 0
//                     //             availableColumnOfBeam[cl[1]+1][cl[0]] = 0
//                     //             if(cl[0]!==0)availableBeamOfColumn[cl[1]+1][cl[0]-1] = 0

//                     //         }
//                     //         else{
//                     //             setColumn[cl[1]][cl[0]]=0
//                     //             availableBeamOfColumn[cl[1]+1][cl[0]] = 0
//                     //             availableColumnOfBeam[cl[1]+1][cl[0]] = 0
//                     //             if(cl[0]!==0)availableBeamOfColumn[cl[1]+1][cl[0]-1] = 0
//                     //         }
//                     //     }
//                     //     else{
//                     //         if(setBeam[cl[1]+1][cl[0]-2]===2 && setBeam[cl[1]+1][cl[0]]===2){
//                     //             answer.forEach( (eachAns,index)=>{
//                     //                 if(eachAns[0]===cl[0]&&eachAns[1]===cl[1]&&eachAns[2]===cl[2]) answer.splice(index,1);
//                     //             })
//                     //             if(cl[1]===0){
//                     //                 setColumn[cl[1]][cl[0]]=1
//                     //                 availableBeamOfColumn[cl[1]+1][cl[0]] = 0
//                     //                 availableColumnOfBeam[cl[1]+1][cl[0]] = 0
//                     //                 if(cl[0]!==0)availableBeamOfColumn[cl[1]+1][cl[0]-1] = 0
    
//                     //             }
//                     //             else{
//                     //                 setColumn[cl[1]][cl[0]]=0
//                     //                 availableBeamOfColumn[cl[1]+1][cl[0]] = 0
//                     //                 availableColumnOfBeam[cl[1]+1][cl[0]] = 0
//                     //                 if(cl[0]!==0)availableBeamOfColumn[cl[1]+1][cl[0]-1] = 0
//                     //             }
//                     //         }
//                     //     }
//                     // }
//                     // else {
//                     //     answer.forEach( (eachAns,index)=>{
//                     //         if(eachAns[0]===cl[0]&&eachAns[1]===cl[1]&&eachAns[2]===cl[2]) answer.splice(index,1);
//                     //     })
//                     //     if(cl[1]===0){
//                     //         setColumn[cl[1]][cl[0]]=1
//                     //         availableBeamOfColumn[cl[1]+1][cl[0]] = 0
//                     //         availableColumnOfBeam[cl[1]+1][cl[0]] = 0
//                     //         if(cl[0]!==0)availableBeamOfColumn[cl[1]+1][cl[0]-1] = 0

//                     //     }
//                     //     else{
//                     //         setColumn[cl[1]][cl[0]]=0
//                     //         availableBeamOfColumn[cl[1]+1][cl[0]] = 0
//                     //         availableColumnOfBeam[cl[1]+1][cl[0]] = 0
//                     //         if(cl[0]!==0)availableBeamOfColumn[cl[1]+1][cl[0]-1] = 0
//                     //     }
//                     // }
//                     //삭제
//                 }
//             }   
//             //보
//             else{
//                 //1. 자기 양쪽의 옆에 보있는지 && 2. 자기 양쪽 위에 기둥 없는지
//                 if(setColumn[cl[1]][cl[0]]!==1 &&setColumn[cl[1]][cl[0]+1]!==1){
//                     if(setBeam[cl[1]][cl[0]+1]===1 ){
//                         if(setColumn[cl[1]-1][cl[0]+1]===1){
//                             answer.forEach( (eachAns,index)=>{
//                                 if(eachAns[0]===cl[0]&&eachAns[1]===cl[1]&&eachAns[2]===cl[2]) answer.splice(index,1);
//                             })
//                             setBeam[cl[1]][cl[0]]=0
//                             availableColumnOfBeam[cl[1]][cl[0]]=0
//                             availableColumnOfBeam[cl[1]][cl[0]+1]=0
//                             availableBeamOfBeam[cl[1]][cl[0]+1]=0
//                             availableBeamOfBeam[cl[1]][cl[0]-2]=0
//                         }
//                     }
//                     else if(setBeam[cl[1]][cl[0]-1]===1){
//                         if(setColumn[cl[1]-1][cl[0]-1]===1){
//                             answer.forEach( (eachAns,index)=>{
//                                 if(eachAns[0]===cl[0]&&eachAns[1]===cl[1]&&eachAns[2]===cl[2]) answer.splice(index,1);
//                             })
//                             setBeam[cl[1]][cl[0]]=0
//                             availableColumnOfBeam[cl[1]][cl[0]]=0
//                             availableColumnOfBeam[cl[1]][cl[0]+1]=0
//                             availableBeamOfBeam[cl[1]][cl[0]+1]=0
//                             availableBeamOfBeam[cl[1]][cl[0]-2]=0
//                         }
//                     }
//                     else{
//                         answer.forEach( (eachAns,index)=>{
//                             if(eachAns[0]===cl[0]&&eachAns[1]===cl[1]&&eachAns[2]===cl[2]) answer.splice(index,1);
//                         })
//                         setBeam[cl[1]][cl[0]]=0
//                         availableColumnOfBeam[cl[1]][cl[0]]=0
//                         availableColumnOfBeam[cl[1]][cl[0]+1]=0
//                         availableBeamOfBeam[cl[1]][cl[0]+1]=0
//                         availableBeamOfBeam[cl[1]][cl[0]-2]=0
//                     }
//                 }  
//                 // if(  setBeam[cl[1]][cl[0]+1]!==2 &&setColumn[cl[1]][cl[0]]!==2){
//                 //     if(cl[0]!==0){
//                 //         if( setBeam[cl[1]][cl[0]-1]!==2 ){
//                 //             answer.forEach( (eachAns,index)=>{
//                 //                 if(eachAns[0]===cl[0]&&eachAns[1]===cl[1]&&eachAns[2]===cl[2]) answer.splice(index,1);
//                 //             })
//                 //             setBeam[cl[1]][cl[0]]=0
//                 //             setBeam[cl[1]][cl[0]+1]=0
                            
//                 //             //놓을수 있는자리
//                 //             availableColumnOfBeam[cl[1]][cl[0]] = 0
//                 //             availableColumnOfBeam[cl[1]][cl[0]+1] = 0
                            
//                 //         }
//                 //     }else {
//                 //         answer.forEach( (eachAns,index)=>{
//                 //             if(eachAns[0]===cl[0]&&eachAns[1]===cl[1]&&eachAns[2]===cl[2]) answer.splice(index,1);
//                 //         })
//                 //         setBeam[cl[1]][cl[0]]=0
//                 //         setBeam[cl[1]][cl[0]+1]=0
                        
//                 //         //놓을수 있는자리
//                 //         availableColumnOfBeam[cl[1]][cl[0]] = 0
//                 //         availableColumnOfBeam[cl[1]][cl[0]+1] = 0
//                 //     }
                    
//                 // }
//             }
//         }
//     })
    
//     //3. 정답 배열 소팅
//     answer.sort((a,b)=>{
//         if (a[0] === b[0]) {
//             if(a[1]===b[1]){
//                 return (a[2] < b[2]) ? -1 : 1;
//             }
//             else return (a[1] < b[1]) ? -1 : 1;
//     }
//     else return (a[0] < b[0]) ? -1 : 1;
//     }
//     )
//     // console.log(setColumn)
//     // console.log(setBeam)
//     // console.log(availableColumnOfColumn)
//     // console.log(availableBeamOfColumn)
//     // console.log(availableColumnOfBeam)
//     // console.log(availableBeamOfBeam)

//     return answer
// }


// const column = [[1,0,0,1],[1,1,1,1],[2,1,0,1],[2,2,1,1],[5,0,0,1],[5,1,0,1],[4,2,1,1],[3,2,1,1]]
// const n = 5

// // const column = [[0,0,0,1],[2,0,0,1],[4,0,0,1],[0,1,1,1],[1,1,1,1],[2,1,1,1],[3,1,1,1],[2,0,0,0],[1,1,1,0],[2,2,0,1]]
// // const n = 5

// console.log(solution(n,column))

// https://jongbeom-dev.tistory.com/142

function solution(n,build_frame){
    let answer = []

    build_frame.forEach(cl=>{
        //1이면 넣기
        //0이면 기둥
        //1이면 보

        if(cl[3]===1){
            if(cl[2]===0){
                if(checkColumn(answer,cl[0],cl[1]))answer.push([cl[0],cl[1],cl[2]])
                //보위에, 땅, 기둥위
            }
            else{
                if(checkFloor(answer,cl[0],cl[1]))answer.push([cl[0],cl[1],cl[2]])
            }
        } 
        //0이면 삭제
        else {
            //기둥
            if(cl[2]===0){
                let tempFrame = Object.assign([], answer);
                let result = true;
                tempFrame.forEach( (eachAns,index)=>{
                    if(eachAns[0]===cl[0]&&eachAns[1]===cl[1]&&eachAns[2]===cl[2]) tempFrame.splice(index,1);
                })
                for (let i=0; i<tempFrame.length; i++){
                    if (tempFrame[i][2]==0){
                        if(!checkColumn(tempFrame, tempFrame[i][0], tempFrame[i][1]))
                            result = false;                              
                    }else {
                        if(!checkFloor(tempFrame,tempFrame[i][0], tempFrame[i][1]))
                            result = false;
                    }
                }
                if (result){
                    answer.forEach( (eachAns,index)=>{
                        if(eachAns[0]===cl[0]&&eachAns[1]===cl[1]&&eachAns[2]===cl[2]) answer.splice(index,1);
                    })
                }
            }   
            //보
            else{
                let tempFrame = Object.assign([], answer);
                let result = true;
                tempFrame.forEach( (eachAns,index)=>{
                    if(eachAns[0]===cl[0]&&eachAns[1]===cl[1]&&eachAns[2]===cl[2]) tempFrame.splice(index,1);
                })
                for (let i=0; i<tempFrame.length; i++){
                    if (tempFrame[i][2]==0){
                        if(!checkColumn(tempFrame, tempFrame[i][0], tempFrame[i][1]))
                            result = false;                              
                    }else {
                        if(!checkFloor(tempFrame,tempFrame[i][0], tempFrame[i][1]))
                            result = false;
                    }
                }
                if (result){
                    answer.forEach( (eachAns,index)=>{
                        if(eachAns[0]===cl[0]&&eachAns[1]===cl[1]&&eachAns[2]===cl[2]) answer.splice(index,1);
                    })
                } 
            }
        }
    })
    
    //3. 정답 배열 소팅
    answer.sort((a,b)=>{
        if (a[0] === b[0]) {
            if(a[1]===b[1]){
                return (a[2] < b[2]) ? -1 : 1;
            }
            else return (a[1] < b[1]) ? -1 : 1;
    }
    else return (a[0] < b[0]) ? -1 : 1;
    }
    )
    return answer
}

function checkColumn(currentFrame, x, y){
    let result = false;
    // 바닥이면 항상 기둥 설치 가능
    if (y ===0){
        result = true;
    // 밑에 기둥이 있으면 설치 가능
    }else if (currentFrame.find(ele => (ele[0]===x && ele[1]===(y-1) && ele[2] ===0)) !== undefined){
        result = true;
    // 왼쪽에 보가 있으면 설치 가능
    }else if (currentFrame.find(ele => (ele[0]===x-1 && ele[1]===y && ele[2] ===1)) !== undefined){
        result = true;
    // 그 위치에 보가 있으면 설치 가능
    }else if(currentFrame.find(ele => (ele[0]===x && ele[1]===y && ele[2] ===1)) !== undefined){
        result = true;
    }
    return result;
}


function checkFloor(currentFrame, x, y){
    let result = false;
     // 밑에 기둥이 있으면 설치 가능
    if (currentFrame.find(ele => (ele[0]===x && ele[1]===(y-1) && ele[2] ===0)) !== undefined){
        result = true;
    // 오른쪽 밑에 기둥이 있을때 설치 가능
    }else if(currentFrame.find(ele => (ele[0]===(x+1) && ele[1]===(y-1) && ele[2] ===0)) !== undefined){
        result = true;
    // 왼쪽과 오른쪽에 보가 위치할 때 설치 가능
    }else if ((currentFrame.find(ele => (ele[0]===x-1 && ele[1]===y && ele[2] ===1)) !== undefined)
    &&(currentFrame.find(ele => (ele[0]===(x+1) && ele[1]===y && ele[2] ===1)) !== undefined)){
        result = true;
    }
    return result;
}

// const column = [[1,0,0,1],[1,1,1,1],[2,1,0,1],[2,2,1,1],[5,0,0,1],[5,1,0,1],[4,2,1,1],[3,2,1,1]]
// const n = 5

const column = [[0,0,0,1],[2,0,0,1],[4,0,0,1],[0,1,1,1],[1,1,1,1],[2,1,1,1],[3,1,1,1],[2,0,0,0],[1,1,1,0],[2,2,0,1]]
const n = 5

console.log(solution(n,column))