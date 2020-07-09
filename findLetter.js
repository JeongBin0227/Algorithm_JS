//문자열 속에 숨어있는 문자를 찾기
//그 문자가 시작하는 index를 반환하는 프로그램

const findLetter = ( sentence, letter ) => {
    return sentence.indexOf(letter)
}

console.log(findLetter('pineapple is good','apple'))