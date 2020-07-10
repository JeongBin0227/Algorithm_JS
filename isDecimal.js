//숫자가 주어지면 소수인지 아닌지 판별하는 프로그램

const isDecimal = (num) => {
  if (num === 1) return "NO"
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return "NO"
  }
  return "YES"
}

console.log(isDecimal(5))
