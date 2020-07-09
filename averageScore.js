//공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 
// 단, 소숫점 자리는 모두 버립니다.

const averageScore = (num1, num2, num3) => {
    console.log(Math.floor((num1+num2+num3)/3))
}

averageScore(20,34,40)