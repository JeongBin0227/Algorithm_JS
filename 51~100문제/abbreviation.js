//어떤 입력이 주어지면 앞 글자만 줄여 출력

const abbreviation = text => {
    let abbreviationText = ''
    let texts = text.split(' ')
    abbreviationText += texts.map(text => text[0]);
    return abbreviationText.replace(/,/g,'')
}

const text = '복잡한 세상 편하게 살자'

console.log(abbreviation(text))