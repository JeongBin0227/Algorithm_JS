// function solution(paper) {
//     let answer = 0;
//     let sum = 0 

//     paper.sort((a,b)=> b-a)
    
//     paper.forEach( (eachPaper,index) => {
//         sum+=eachPaper
//         if(sum>=Math.pow(index+1, 2)) answer = index+1
//         console.log(index)
//     });
    
//     return answer;
// }


// const paper = [7, 5, 18, 10, 6, 9, 5]
// console.log(solution(paper))

// function solution(n){
//     let threeCount = 0
    
//     while( n >= 3*threeCount ){
//         if( (n-(3*threeCount))%5===0)return threeCount+ (n-(3*threeCount))/5
//         threeCount ++
//     }

//     return -1

// }


// function solution(foods) {
//     let answer = 0
  
//     const sum = foods.reduce((accum, value) => accum + value, 0)
  
//     if (sum % 3 !== 0) return 0
  
//     const each = sum / 3
  
//     const digests = [0, 0, 0]
  
//     for (let i = 0; i < foods.length; i++) {
//       digests[0] += foods[i]
  
//       if (digests[0] === each) {
//         digests[1] = 0
  
//         for (let j = i + 1; j < foods.length; j++) {
//           digests[1] += foods[j]
  
//           if (digests[1] === each) {
//             digests[2] = 0
  
//             for (let k = j + 1; k < foods.length; k++) {
//               digests[2] += foods[k]
  
//               if (digests[2] === each && k === foods.length - 1) {
//                 answer++
//               }
//             }
//           }
//         }
//       }
//     }
  
//     return answer
//   }

function solution(N, relations) {
    const relationList = relations.reduce((relationList, relation) => {
      relationList[relation[0] - 1].add(relation[1] - 1)
      relationList[relation[1] - 1].add(relation[0] - 1)
  
      return relationList
    }, Array.from({
      length: N
    }, () => new Set()))
  
    const result = relationList.reduce((result, relation, index) => {
      relation.forEach((node) => {
        relationList[node].forEach((other) => {
          result[index].add(other)
        })
      })
      return result
    }, relationList.map((relation, index) => new Set(relation).add(index)))
  
    return result.map(item => item.size - 1)
  }
  
// const n = 15 
const n = 7
console.log(solution(n))
