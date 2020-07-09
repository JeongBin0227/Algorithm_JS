//문자열을 입력받으면 단어의 갯수를 출력하는 프로그램

const countString = letter => {
    return letter.split(' ').length
}

console.log(countString('안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.'))