//키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램

const checkSort = numArr => {
    for(let i=1; i<numArr.length; i++){
        if(numArr[i-1]>numArr[i]) return 'NO'
    }
    return 'YES'
}

console.log(checkSort([155,156,165,166,169,176]))