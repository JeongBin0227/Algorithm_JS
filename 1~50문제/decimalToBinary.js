let a = 12
let b = []
let result = ""

while (a) {
  b.push(a % 2)
  a = parseInt(a / 2, 10)
}
b.reverse()

b.forEach((n) => {
  result += n
})

console.log(result)
