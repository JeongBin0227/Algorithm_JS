//이 숫자가 연속수인지 아닌지 "YES"와 "NO"로 판별하는 프로그램을 작성하시오

const isConsecutive = (arr) => {
  let numArr = arr.split(" ")
  numArr.sort((a, b) => {
    return a - b
  })
  for (let i = 1; i < numArr.length; i++) {
    if (numArr[i - 1] + 1 !== numArr[i]) return false
  }
  return true
}

const num = "1 2 35 5 6"

console.log(isConsecutive(num))
