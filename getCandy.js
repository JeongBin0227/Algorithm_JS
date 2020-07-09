// 1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
// 학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력

const getCandy = candies => {
    let count = 0
    let arr = [];

    candies.sort((a,b)=>{return b-a}).join(',')

    while (arr.length < 3) {
        let n = candies.shift()
        if (!arr.includes(n)){
            arr.push(n);
        }
        count += 1
    }
    console.log(count)
    // for(cd in candies){
    //     if(candy[candies[cd]]!==undefined)candy[candies[cd]]+=1
    //     else candy[candies[cd]]=1
    // }
    // // Object.keys(candy).sort().forEach(function(key) {
    //     // orderedCandy[key] = candy[key];
    //     // console.log(candy[key])
    // //   });
    // console.log(Object.keys(candy).reverse())
    // console.log(candy)
    // console.log(orderedCandy)
}

getCandy([97,86,75,66,55,97,85,97,97,95])