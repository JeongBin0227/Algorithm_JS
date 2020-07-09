//테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다. 
//원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.

const largestNum = (limit, num, people) => {
    let availableNum = 0
    let weight = 0
    for(let i = 0; i<people.length; i++){
        weight+=people[i]
        if(weight>limit) return availableNum
        availableNum++
    }
    return availableNum
}

console.log(largestNum(50,5,[20,20,20,20,20]))