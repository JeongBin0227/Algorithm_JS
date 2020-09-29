function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    const M = S[0].length
    const alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('')
    
    for(let j =0;j<alphabet.length;j++){
        for(let z = 0;z<M;z++){
            let answer = []
            for(let i = 0;i<S.length;i++){
                if(S[i].charAt(z)===alphabet[j]) {
                    if(answer.length ===0) answer.push(i)
                    else{
                        answer.push(i)
                        answer.push(z)
                    }
                }
            }
            if(answer.length===3) return answer 
        }
    }
    return []
}

const S = ['zzzz','ferz','zdsr','fgtd']

console.log(solution(S))