function solution(arr) {  
    let firstCal = false
    let mix = 0
    let min = 0
    let answer = 0 
    let index = 0

    for(let i =1; i<arr.length;i++){
        if( arr[i] > arr[i-1]){
            // if(!firstCal){
            //     for(let j=0; j<i;j++){
            //         let tmp = arr[i] - arr[j]
            //         if(tmp>answer) answer = tmp
            //     }
            //     firstCal=true
            // }
            // else{
            //     answer+= arr[i] - arr[i-1]
            // }
        }
    }
    if(firstCal) return answer
    else return -1
}

// const arr = [5,3,6,7,4]
const arr = [2,3,10,2,4,8,1]
// const arr = [5,3,5,7,9]
// const arr = [4,3,2,1]

console.log(solution(arr))

