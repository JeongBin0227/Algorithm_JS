//여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램

const printReverse = num => {
    console.log(num.split(' ').reverse().join(' '))
}

printReverse('1 2 3 4 5')