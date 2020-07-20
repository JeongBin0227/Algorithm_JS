// 369 게임을 하는데 조금 이상한 규칙이 있습니다. 3이나 6, 9 일 때만 박수를 쳐야합니다. 예를 들어 13, 16과 같이 3과 6, 9 만으로 된 숫자가 아닐 경우엔 박수를 치지 않습니다.
// 수현이는 박수를 몇 번 쳤는지 확인하고 싶습니다. 36일 때 박수를 쳤다면 박수를 친 횟수는 5번입니다.

const strage369 = num => {
    let answer = 0
    for(let i = 1; i<= num ;i++){
        let numToStrings = i.toString().split('')
        let is369 = true
        numToStrings.forEach(numToString => {
            if(Number(numToString) %3 !== 0 || Number(numToString) === 0 )is369=false
        })
        if(is369) answer++
    }
    return answer
}

console.log(strage369(93))

// function sol(n){
//     let answer = 0;
//     let count = 1;
//     const d = {3 : 1, 6 : 2, 9 : 3};
    
//     while (n.length !== 0){
//         answer += d[parseInt(n.pop(), 10)] * count;
//         count *= 3;
//     }
        
        
//     return answer;
// }