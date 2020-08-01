`
토끼들이 징검다리를 건너려고 합니다. 하지만 돌이 부실해서 몇 번 건너지 못할 것 같습니다.
대기 중인 토끼들의 통과 여부를 배열에 담아 출력해 주세요.

1. 각 돌들이 얼마나 버틸 수 있는지 배열로 주어집니다.

2. 각 토끼가 착지할 때마다 돌의 내구도는 1씩 줄어듭니다.
    ex) [1,2,1,4] 각 돌마다 1마리 2마리 1마리 4마리의 착지를 버틸 수 있습니다.

3. 토끼들은 점프력이 각자 다릅니다. 
    ex) [2,1] 첫 번째 토끼는 2칸씩, 두 번째 토끼는 1칸씩 점프합니다.

4. 각 토끼들은 순서대로 다리를 건넙니다.
`
const rabbitMarch = (durability,jump) => {
    let answer = []
    let isSuccess = true
    for (const rabbit of jump) {
        let rJump = -1
        rJump += rabbit
        isSuccess = true
        while(durability.length>rJump){
            if(durability[rJump]==0) {
                answer.push('fail')
                isSuccess = false
                break
            }
            durability[rJump] -=1
            rJump+=rabbit
        }
        if(isSuccess) answer.push('pass')
    }
    return answer
}


const durability = [1, 2, 1, 4]
const jump = [2, 1]
// const durability = [1, 2, 1, 4, 5, 2]
// const jump = [2, 1, 3, 1]

console.log(rabbitMarch(durability,jump))