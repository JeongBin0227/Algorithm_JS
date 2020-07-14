//숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.

let num = 123456789

// 방법 1
const makeComma = (num) => {
  let commaNum = ""
  let divideNum = num
  while (divideNum / 1000 > 100) {
    commaNum = "," + (divideNum % 1000) + commaNum
    divideNum = Math.floor(divideNum / 1000)
  }
  commaNum = divideNum + commaNum
  return commaNum
}
console.log(makeComma(num))

//방법2
console.log(num.toLocaleString())
