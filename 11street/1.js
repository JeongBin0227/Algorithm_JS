function solution(S) {
    let aCount = 0
    let answer = 0
    let str = S.split('')

    for(let i  =0 ;i<str.length;i++){
        if(str[i]==='a') aCount++
        else{
            answer += 2-aCount
            aCount=0
        }

        if(aCount===3) return -1
    }
    answer += 2-aCount
    return answer
}


const S = 'aa'
console.log(solution(S))