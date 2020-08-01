function formatToKoreanNumber(num){
    if (num===0) return 0
    const unitWords    = ['', '만', '억']
    const unit    = 10000
    const unitLength   = 3
    const answerArr  = [];
    let answer = '';

    for (let i = 0; i < unitLength; i++){
        let unitDivideResult = (num % Math.pow(unit, i + 1)) / Math.pow(unit, i)
        unitDivideResult = Math.floor(unitDivideResult)
        if (unitDivideResult > 0){
            answerArr[i] = unitDivideResult
        }
    }

    for (let i = 0; i < answerArr.length; i++){
        if(!answerArr[i]) continue
        answer = String(answerArr[i]) + unitWords[i] + ' ' + answer
    }
    
    return answer.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

console.log(formatToKoreanNumber(123456543210))
console.log(formatToKoreanNumber(123456543210).length)