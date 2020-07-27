`
천하제일 먹기 대회가 개최되었습니다.
이 대회는 정해진 시간이 끝난 후 음식을 먹은 그릇 개수를 파악한 후 각 선수들의 등수를 매깁니다. 

1. 같은 이름의 선수는 없습니다.
2. 접시의 수가 같은 경우는 없습니다.
`

const eatingContest = (name, point) => {
    let nameMaptemp = [];
    let nameMap = new Map()

    for (let i in name){
        nameMap.set(name[i],point[i])
    }
    var mapAsc = new Map([...nameMap].sort((a,b)=>
        (a[1] < b[1] && 1) || (a[1] === b[1] ? 0 : -1)
    ))


    for (const j of mapAsc) {
        console.log(j)
        console.log(j[0])
    }
}

const name = ["홍길동","엄석대","연개소문","김첨지"]
const point = [2, 5, 3, 0]

eatingContest(name,point)