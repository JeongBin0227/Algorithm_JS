//알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램

const isCaptialLetter = letter => {
    if(letter.charCodeAt(0)>95) console.log('NO')
    else console.log('YES')
}

isCaptialLetter('A')
isCaptialLetter('a')
