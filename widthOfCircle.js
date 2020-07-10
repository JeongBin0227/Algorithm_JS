//입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.

const widthCircle = num => {
    return Math.pow(num,num)*3.14
}

console.log(widthCircle(3))