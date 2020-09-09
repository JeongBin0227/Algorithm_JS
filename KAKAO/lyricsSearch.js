`
문제:
친구들로부터 천재 프로그래머로 불리는 프로도는 음악을 하는 친구로부터 자신이 좋아하는 노래 가사에 사용된 단어들 중에 특정 키워드가 몇 개 포함되어 있는지 궁금하니 프로그램으로 개발해 달라는 제안을 받았습니다.
그 제안 사항 중, 키워드는 와일드카드 문자중 하나인 '?'가 포함된 패턴 형태의 문자열을 뜻합니다. 와일드카드 문자인 '?'는 글자 하나를 의미하며, 어떤 문자에도 매치된다고 가정합니다. 예를 들어 "fro??"는 "frodo", "front", "frost" 등에 매치되지만 "frame", "frozen"에는 매치되지 않습니다.

가사에 사용된 모든 단어들이 담긴 배열 words와 찾고자 하는 키워드가 담긴 배열 queries가 주어질 때, 각 키워드 별로 매치된 단어가 몇 개인지 순서대로 배열에 담아 반환하도록 solution 함수를 완성해 주세요.

가사 단어 제한사항:
words의 길이(가사 단어의 개수)는 2 이상 100,000 이하입니다.
각 가사 단어의 길이는 1 이상 10,000 이하로 빈 문자열인 경우는 없습니다.
전체 가사 단어 길이의 합은 2 이상 1,000,000 이하입니다.
가사에 동일 단어가 여러 번 나올 경우 중복을 제거하고 words에는 하나로만 제공됩니다.
각 가사 단어는 오직 알파벳 소문자로만 구성되어 있으며, 특수문자나 숫자는 포함하지 않는 것으로 가정합니다.

검색 키워드 제한사항:
queries의 길이(검색 키워드 개수)는 2 이상 100,000 이하입니다.
각 검색 키워드의 길이는 1 이상 10,000 이하로 빈 문자열인 경우는 없습니다.
전체 검색 키워드 길이의 합은 2 이상 1,000,000 이하입니다.
검색 키워드는 중복될 수도 있습니다.
각 검색 키워드는 오직 알파벳 소문자와 와일드카드 문자인 '?' 로만 구성되어 있으며, 특수문자나 숫자는 포함하지 않는 것으로 가정합니다.
검색 키워드는 와일드카드 문자인 '?'가 하나 이상 포함돼 있으며, '?'는 각 검색 키워드의 접두사 아니면 접미사 중 하나로만 주어집니다.
예를 들어 "??odo", "fro??", "?????"는 가능한 키워드입니다.
반면에 "frodo"('?'가 없음), "fr?do"('?'가 중간에 있음), "?ro??"('?'가 양쪽에 있음)는 불가능한 키워드입니다.

입출력 예
words	                                                      queries	                                           result
["frodo", "front", "frost", "frozen", "frame", "kakao"]	      ["fro??", "????o", "fr???", "fro???", "pro?"]        [3, 2, 4, 1, 0]
`

function solution(words, queries){
    let wordsNode = []
    let wordsBackNode = []
    let answer = []

    const wordsNodeCheck = (wordSplit,length) =>{
        let count = 0
        let tmp = wordsNode
       
        if(wordsNode[length]===undefined) {
            wordsNode[length] = []
        }
        tmp = wordsNode[length]

        while(wordSplit.length>count){
            if(wordSplit.length-1 === count){
                if(tmp[wordSplit[count]]===undefined)tmp[wordSplit[count]] = []
                tmp[wordSplit[count]].push('*')
            }
            else if(tmp[wordSplit[count]] === undefined ){
                tmp[wordSplit[count]] = []
            }
            
            tmp = tmp[wordSplit[count]]

            count++
            
        }
        // console.log(wordsNode)
        // console.log(JSON.stringify(wordsNode))

    }

    const wordsBackNodeCheck = (wordSplit,length) =>{
        let count = 0
        let tmp = wordsBackNode

        if(wordsBackNode[length]===undefined) {
            wordsBackNode[length] = []
        }
        tmp = wordsBackNode[length]

        while(wordSplit.length>count){

            if(wordSplit.length-1 === count){
                if(tmp[wordSplit[count]]===undefined)tmp[wordSplit[count]] = []
                tmp[wordSplit[count]].push('*')
            }
            else if(tmp[wordSplit[count]] === undefined ){
                tmp[wordSplit[count]] = []
            }
            tmp = tmp[wordSplit[count]]
            count++
            
        }
    }

    const findAnswer = (obj,count) => {
        let ct = 0
        let tmp = []

        
        for(let a in obj){
            tmp.push(obj[a])
        }

        for(let i=0;i<count-1;i++){
            let time = tmp.length
            for(let j=0;j<time;j++){
                let ap = tmp.shift()
                // console.log(ap)
                if(ap !=='*'){
                    for(let b in ap){
                        // console.log(ap[b].length)
                        if(ap[b].length===1) ct++
                        tmp.push(ap[b])
                    }
                }
            }   
        }

        // while(tmp.length!==0){
        //     let popNode = tmp.pop()
        //     if(JSON.stringify(popNode) === `["*"]`)ct++
        // }

        answer.push(ct)
    }

    words.forEach(word => {
        let wordSplit = word.split('')
        // console.log(wordSplit)
        wordsNodeCheck(wordSplit,wordSplit.length)
        wordsBackNodeCheck(wordSplit.reverse(),wordSplit.length)
    });


    
    
    queries.forEach(query => {
        let querySplit = query.split('')

        if(querySplit[0]!=='?'){
            if(wordsNode[querySplit.length]===undefined) answer.push(0)
            else{
                let tmp = wordsNode[querySplit.length]
                for(let i=0;i<querySplit.length;i++){
                    if(querySplit[i]==='?'){
                        let count = querySplit.length - i
                        findAnswer(tmp,count)
                        break
                    }
                    else{
                        if(tmp[querySplit[i]]===undefined) {
                            answer.push(0)
                            break
                        }
                        else {
                            tmp = tmp[querySplit[i]]
                        }
                        
                    }
                }
            }
        }
        else{
            let tmpQuery = querySplit.filter(qs => qs==='?')
            if(tmpQuery.length === querySplit.length){
                let wordTmp = words.filter(wd=>wd.length === tmpQuery.length)
                answer.push(wordTmp.length)
            }
            else{
                if(wordsNode[querySplit.length]===undefined) answer.push(0)
                else{
                    let tmp = wordsBackNode[querySplit.length]
                    for(let i=querySplit.length-1;i>=0;i--){
                        if(querySplit[i]!=='?'){
                            if(tmp[querySplit[i]]===undefined) {
                                answer.push(0)
                                break
                            }
                            else {
                                tmp = tmp[querySplit[i]]
                            }
                        }
                        else{
                            let count = i+1
                            findAnswer(tmp,count)
                            break
                        }

                    }
                }
            }
        }
    })
    // console.log(wordsNode)

    // console.log(JSON.stringify(wordsNode))
    return answer
}

const words = ["frodo", "front", "frost", "frozen", "frame", "kakao"]
const queries = ["fro??", "????o", "fr???", "fro???", "pro?"]
// const queries = ["?????","?????","?????","??"]

console.log(solution(words,queries))


function test(){ 
    const querySplit = ["?","?","?","?","?"]
    let tmpQuery = querySplit.filter(qs => qs==='?')
    if(tmpQuery.length === querySplit.length){
        console.log('ss')
    }
    // let wordsNode = []

    // const wordsNodeCheck = (wordSplit) =>{
    //     let count = 0
    //     let tmp = wordsNode

    //     while(wordSplit.length>count){

    //         if(wordSplit.length-1 === count){
    //             tmp[wordSplit[count]] = []
    //             tmp[wordSplit[count]].push('*')
    //         }
    //         else if(tmp[wordSplit[count]] === undefined ){
    //             tmp[wordSplit[count]] = []
    //         }
            
    //         tmp = tmp[wordSplit[count]]

    //         count++
            
    //     }
    //     console.log(wordsNode)
    //     console.log(wordsNode)

    // }

    // const word1 = ["f","r"]
    // const word2 = ["f","r","o","g"]
    // wordsNodeCheck(word1)
    // wordsNodeCheck(word2)
}
// test()