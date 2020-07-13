//현재 연도(2020)를 출력

const d = new Date()

let year = d.getTime()
year = Math.floor(year / (3600 * 24 * 365 * 1000)) + 1970

console.log(year)
