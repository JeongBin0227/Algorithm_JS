//아래 주어진 데이터들로부터 중복을 제거하여 실제 접수 인원을 출력

const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903",
}

const deduplication = (people) => {
  const deduplicationPeople = new Set()

  for (man in people) {
    deduplicationPeople.add(man)
  }
  return deduplicationPeople.size
}

console.log(deduplication(people))
