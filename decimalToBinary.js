//사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.

const decimalToBinary = (num) => {
  let binary = ""
  while (num !== 0) {
    binary += num % 2
    // num = Math.floor(num / 2)
    num = parseInt(num / 2, 10)
  }
  console.log(binary.split("").reverse().join(""))
  //   console.log(parseInt("101", 2))
}

decimalToBinary(6)
