// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let answer = 0;
//     A.sort((a,b)=>a-b)

//     A.forEach( (num,index) => {
//         if(index+1 !== num) answer ++
//     });

//     return answer
// }

// // const A= [1,2,4,4]
// const A= [6,2,3,5,6,3]

// console.log(solution(A))


A= [6,2,3,5,6,3]

A.sort((a,b)=>{
    if(a<5||b<5) return a-b
    else return b-a
})

console.log(A)