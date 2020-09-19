function solution(foods) {
    let answer = 0
  
    const sum = foods.reduce((accum, value) => accum + value, 0)
  
    if (sum % 3 !== 0) return 0
  
    const each = sum / 3
  
    const digests = [0, 0, 0]
  
    for (let i = 0; i < foods.length; i++) {
      digests[0] += foods[i]
  
      if (digests[0] === each) {
        digests[1] = 0
  
        for (let j = i + 1; j < foods.length; j++) {
          digests[1] += foods[j]
  
          if (digests[1] === each) {
            digests[2] = 0
  
            for (let k = j + 1; k < foods.length; k++) {
              digests[2] += foods[k]
  
              if (digests[2] === each && k === foods.length - 1) {
                answer++
              }
            }
          }
        }
      }
    }
  
    return answer
  }