// 가장 긴 공통 부분 문자열(Longest Common Subsequence)이란 A, B 두 문자열이 주어졌을 때 두 열에 공통으로 들어 있는 요소로 만들 수 있는 가장 긴 부분열을 말합니다. 여기서 부분열이란 다른 문자열에서 몇몇의 문자가 빠져 있어도 순서가 바뀌지 않은 열을 말합니다.
// 예를 들어 S1 = ['T', 'H', 'I', 'S', 'I', 'S', 'S', 'T', 'R', 'I', 'N', 'G', 'S']  S2 = ['T', 'H', 'I', 'S', 'I', 'S']라는 두 문자열이 있을 때 둘 사이의 부분 공통 문자열의 길이는 ['T', 'H', 'I', 'S', 'I', 'S']의 6개가 됩니다.
// 이처럼 두 문자열이 주어지면 가장 긴 부분 공통 문자열의 길이를 반환하는 프로그램을 만들어 주세요.
// 두 개의 문자열이 한 줄에 하나씩 주어집니다. 문자열은 알파벳 대문자로만 구성되며 그 길이는 100글자가 넘어가지 않습니다.
// 출력은 이 두 문자열의 가장 긴 부분 공통 문자열의 길이를 반환하면 됩니다

const reducer = (accumulator, currentValue) => {
    console.log(accumulator)
    console.log(currentValue)
    let count = 0
    let i = 0
    while(currentValue.length>i) {
        console.log(currentValue[i])
        console.log(accumulator.indexOf(currentValue[i]))
        let index =  accumulator.indexOf(currentValue[i])
        console.log('index',index+1)
        if(index !== -1) {
            count++
            accumulator = accumulator.slice(index+1)
        }
        console.log('accumulator',accumulator)
        i++
    }
    return count;
}


const longestCommonSubstring = (a,b) => {
    let firstStrings = a.split('')
    let secondStrings = b.split('')
    let firstSize = firstStrings.length
    let secondeSize = secondStrings.length
    let answer = 0
    let arrSame = []
    let same = 0
    let x = 0
    let y = 0

    const array1 = a.split('')
    const array2 = b.split('')
    
    return reducer(array1,array2)
    // console.log(array1.foreach(a => a.reduce(reducer,a))
    
    // for(let i=0; i<firstSize;i++){
    //     let tmp = secondStrings
    //     for(let j=0;j<secondeSize;j++){
    //         same = 1
    //         if(firstStrings[i] === secondStrings[j]){
    //             x = i
    //             y = j
    //             while(x+1<firstSize&&y+1<secondeSize&&firstStrings[x+1] === secondStrings[y+1]){
    //                 same++
    //                 x++
    //                 y++
    //             }
    //             arrSame.push(same)
    //         }
            
    //     }
    // }

    // return Math.max.apply(null,arrSame)
}

// console.log(longestCommonSubstring('THISISSTRINGS','THISIS'))
// console.log(longestCommonSubstring('TATHISISKKQQAEW','THISISSTRINGS'))
// console.log(longestCommonSubstring('KIOTHIKESSISKKQQAEW','THISISSTRINGS'))
console.log(longestCommonSubstring('THISISSTRINGS','TKHKIKSIS'))