//2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
// 두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution

const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const calWeek = (month, day) => {
  //   let allDays = 0
  //   for (let i = 1; i < month; i++) {
  //     allDays += days[i - 1]
  //   }
  //   allDays += day
  //   console.log(week[(allDays + 2) % 7])
  const x = new Date("2020-" + month + "-" + day)
  console.log(week[x.getDay()])
}

calWeek(7, 8)

//const x = new Date('2020-'+a+'-'+b);
//x.getDay()
