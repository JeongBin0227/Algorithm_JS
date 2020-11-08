`코딩 오디션 프로그램에 해커가 침투하여 일부 참가자의 점수를 조작하였습니다. 조사관으로 투입된 당신은, 해커가 조작한 점수에 어떤 패턴이 남은 것을 발견하였고, 아래와 같은 패턴을 띄는 조작된 점수를 제거하기로 하였습니다.

인접된 등수 사이의 점수차가 k번이상 반복되어 나온다면, 해당하는 인접된 등수는 모두 조작된 점수입니다.
이 때, 조작되지 않은 점수는 몇 개인지 구하려 합니다.
조작의 기준인 반복 횟수 k, 내림차순으로 정렬된 점수가 담긴 배열 score가 매개변수로 주어집니다. 이때, 조작되지 않은 점수의 개수를 return 하도록 solution 함수를 완성해주세요. 조작되지 않은 점수가 하나도 없다면, 0을 return 합니다.


`
function solution(k,score) {
    let diffScore = new Map()
    let deleteDiff=[]
    let answer = score.length
    let isContinuous = false

    for(let i=1;i<score.length;i++){
        let diff = score[i-1] - score[i]

        if(diffScore.get(diff)===undefined) diffScore.set(diff,1)
        else diffScore.set(diff, diffScore.get(diff)+1)
    }

    // console.log(diffScore)
    
    for(let diff of diffScore){
        if(diff[1]>=k)deleteDiff.push(diff[0])
    }

    console.log(deleteDiff)

    for(let i=1;i<score.length;i++){
        let diff = score[i-1] - score[i]
        
        if(deleteDiff.includes(diff)){
            answer--
            isContinuous = true
        }
        else{
            if(isContinuous){
                answer--
                isContinuous = false
            }
        }

    }

    return answer 
}
// const k = 3
// const score = [24,22,20,10,5,3,2,1]	

const k = 2
const score = [1300000000,700000000,668239490,618239490,568239490,568239486,518239486,157658638,157658634,100000000,100]	

console.log(solution(k,score))
