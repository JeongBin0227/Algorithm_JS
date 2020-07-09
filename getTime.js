//getTime() 을 이용하여 연도(2020)를 출력해보세요.

const d = new Date()

let year = d.getTime()
year = Math.floor(year / (3600 * 24 * 365 * 1000)) + 1970

console.log(year)
