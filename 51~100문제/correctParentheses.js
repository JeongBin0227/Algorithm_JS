//입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.
//괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것

const isParentheses = (arr) => {
  let parentheses = arr.split("")
  let isCheck = true
  let parenthesesStack = []
  parentheses.forEach((parenthese) => {
    switch (parenthese) {
      case "(":
      case "{":
      case "[":
        parenthesesStack.push(parenthese)
        break
      case ")":
        if (parenthesesStack[parenthesesStack.length - 1] !== "(")
          isCheck = false
        else parenthesesStack.pop()
        break
      case "]":
        if (parenthesesStack[parenthesesStack.length - 1] !== "[")
          isCheck = false
        else parenthesesStack.pop()
        break
      case "}":
        if (parenthesesStack[parenthesesStack.length - 1] !== "{")
          isCheck = false
        else parenthesesStack.pop()
        break
      default:
        break
    }
  })

  if (isCheck && parenthesesStack.length == 0) return true
  else return false
}

const parentheses = "({})"

console.log(isParentheses(parentheses))
