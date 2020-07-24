//수학공식이 제대로 입력이 되었는지 판단하는 코드를 작성하려 합니다. 괄호는 소괄호밖에 없습니다.

const isMathParentheses = formula => {
    const formulas = formula.split('')
    let answer = true
    let parentheseStack = []
    formulas.forEach(form => {
        if(form==='('){
            parentheseStack.push('(')
        }
        else if(form===')'){
            if(parentheseStack.length!==0 ||  parentheseStack.pop() !=='(') answer = false
        }
    });

    return answer
}

const formula = '5 + 7) * (3 * 5)'

console.log(isMathParentheses(formula))