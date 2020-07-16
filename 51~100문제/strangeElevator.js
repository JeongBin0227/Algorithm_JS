// 정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다.
// 화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.

// 예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는
// 7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.

const leastNum = weigth => {
    const sevenMax = Math.floor(weigth/7)
    let sevenNum = 0
    let threeNum = 0
    let isDivide = false

    for(let i =sevenMax;i>0;i--){
        let temp = weigth-(7*i)
        if(temp%3===0){
            sevenNum =i
            threeNum = Math.floor(temp/3)
            isDivide = true
            break
        }
    }

    if(isDivide) return sevenMax+threeNum
    else return -1 
}

console.log(leastNum(76))