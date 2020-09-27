
function solution(m, k) {
    let kString = k.split('')

    for(let i =0;i<m.length;i++){
        if(index>kString.length) break; 
        if(m.charAt(i)==k.charAt(index)) {
            m = m.substr(0,i)+m.substr(i+1)
            index++
        }
    }
    
    
    return m
}

const m = 'acbbcdc'
const k = 'abc'
//cbdc
//bcdc
console.log(solution(m, k))