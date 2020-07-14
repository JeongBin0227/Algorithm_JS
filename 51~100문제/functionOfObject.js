//다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

const nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
}

const korea = nationWidth.korea
let diff = korea
let nationDiff = ""

for (nation in nationWidth) {
  let koreaDiff = Math.abs(nationWidth[nation] - korea)

  if (nation !== "korea") {
    if (korea > koreaDiff) {
      diff = koreaDiff
      nationDiff = nation
    }
  }
}

console.log(nationDiff, diff)
