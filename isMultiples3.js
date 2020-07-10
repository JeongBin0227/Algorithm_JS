// 입력으로 랜덤한 숫자 n이 주어집니다.
// 만약 그 수가 3의 배수라면 '짝'이라는 글자를, 3의 배수가 아니라면 n을 그대로 출력해 주세요.

const isMutlple3 = num => {
    if(num%3==0) console.log('짝')
    else console.log(num)
}

isMutlple3(3)
isMutlple3(2)