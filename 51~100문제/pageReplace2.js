`
LRU 알고리즘이란 페이지 교체 알고리즘으로써, Least Resently Used의 약자입니다. 즉 페이지 부재가 발생했을 경우 가장 오랫동안 사용되지 않은 페이지를 제거하는 알고리즘입니다.
이 알고리즘의 기본 가설은 가장 오랫동안 이용되지 않은 페이지는 앞으로도 사용할 확률이 적다는 가정하에 페이지 교체가 진행됩니다.
`

const pageReplace = (page,frame) => {
    let memory = []
    let pages = page.split('')
    let time = 0
    pages.forEach(pg => {
        if(!memory.includes(pg)) {
            time +=6
            if(memory.length==frame){
                memory.shift()
            }
            memory.push(pg)
        }
        else{
            memory.splice(memory.indexOf(pg),1)
            time +=1 
            memory.push(pg)
        }
    });

    return time
}

// const page = 'ABCDABEABCDE'
// const frame = 4

// const page = 'ABCEDF'
// const frame = 0

const page = 'BCBAEBCE'
const frame = 3

console.log(pageReplace(page,frame))