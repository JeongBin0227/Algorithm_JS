//문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.

const changeCorrection = letter => {
    return letter.replace(/q/gi,'e')
    // return replaceAll(letter,"q","e")
}

console.log(changeCorrection('querty'))
console.log(changeCorrection('hqllo my namq is hyqwon'))