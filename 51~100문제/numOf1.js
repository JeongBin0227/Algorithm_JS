//0부터 1000까지 1의 개수를 세는 프로그램

let count = 0
for (let i = 1; i <= 1000; i++) {
  let nums = i.toString().split("")
  nums.forEach((num) => {
    if (num.split("").includes("1")) count++
  })
}

console.log(count)
