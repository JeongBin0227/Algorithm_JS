//키가 150이 넘으면 YES를 틀리면 NO를 출력하는 프로그램을 작성하세요.

const limuit = num => {
    if(num>150) console.log('YES')
    else console.log('NO')
}

limuit(150)
limuit(151)