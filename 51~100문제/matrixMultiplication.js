// 행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 곱할 수 있다면 그 결과를 출력하고,
// 곱할 수 없다면 -1을 출력하는 프로그램을 만들어주세요.

const matrixMult = (a,b) => {
    let result = []
    if(a.length !== b[0].length || a[0].length !==b.length) return -1

    for(let i =0;i< a.length;i++){
        let tmp = []
        for(let j=0;j<a[0].length;j++){
            let tmpNum = 0
            for(let z=0;z<a[0].length;z++){
                tmpNum += a[i][z] * b[z][j]
            }
            tmp.push(tmpNum)
        }
        result.push(tmp)
    }
    return result
}

const a = 
[[1, 2],
[2, 4]]

const b =
[[1, 0],
[0, 3]]

console.log(matrixMult(a,b))