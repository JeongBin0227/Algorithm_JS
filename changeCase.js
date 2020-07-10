//대문자와 소문자를 바꿔서 출력하는 프로그램을 작성

const changeCase = (letter) => {
  let newLettersArr = letter.split("")
  let newLetter = ""

  newLettersArr.forEach((lt) => {
    if (lt.charCodeAt(0) > 96) newLetter += lt.toUpperCase()
    else newLetter += lt.toLowerCase()
  })

  return newLetter
}

console.log(changeCase("AAABBBcccddd"))
