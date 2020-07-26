`
일정한 규칙을 가지고 있는 숫자를 나열하는 놀이를 하는 중입니다.
이전 숫자에서 각 숫자의 개수를 나타내어 숫자로 만들고 다시 그 숫자를 같은 규칙으로 만들며 나열합니다.
이 놀이는 1부터 시작합니다.
다음 수는 1이 1개이기 때문에 '11'이 되고,
 '11'에서 1이 2개이기 때문에 그다음은 '12'가 됩니다.
`
const numberGame = number => {
    let numberMap = new Map()
    let answer = '1'
    let tmps = []

    for(let i=1; i<number;i++){
        tmps = answer.split('')
        tmps.sort()
        for(let j=0;j<tmps.length;j++){
            if(numberMap.get(tmps[j])!==undefined)numberMap.set(tmps[j],numberMap.get(tmps[j])+1)
            else numberMap.set(tmps[j],1)
        }
        answer = ''
        for(let z of numberMap){
            answer += z[0]+''+z[1]
        }
        numberMap.clear()
    }

    return answer
}

console.log(numberGame(6))