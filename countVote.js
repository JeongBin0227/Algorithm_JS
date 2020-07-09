//학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램

const countVote = vote => {
    var result = {}
    var winner = ''
    let votes = vote.split(' ')
    
    for(vt in votes){
        if(result[votes[vt]]!==undefined)result[votes[vt]]+=1
        else result[votes[vt]]=1
    }
    winner = Object.keys(result).reduce(function(a, b){
        return result[a] > result[b] ? a : b
    });
    console.log(winner,'(이)가 총', result[winner],'표로 반장이 되었습니다.')
}

countVote('원범 원범 혜원 혜원 혜원 혜원 유진 유진')

// let winner = ''
// let result = {
//     '정빈':12,'원범':1,'인준':2,'상미':8
// }
// console.log(result)
// winner = Object.keys(result).reduce(function(a, b){
//     return result[a] > result[b] ? a : b
// });

// console.log(winner)
