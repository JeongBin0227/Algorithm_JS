//숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
function check_prime(num) {
  for (let i = 2; i < num; i++) {
    const result = num % i
    if (result === 0) {
      console.log("NO")
      return false
    }
  }
  if (num === 1) {
    console.log("NO")
    return
  }
  console.log("YES")
}

const num = 10
check_prime(num)
