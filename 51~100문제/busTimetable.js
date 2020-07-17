// 학교가 끝난 지원이는 집에 가려고 합니다. 학교 앞에 있는 버스 시간표는 너무 복잡해서 버스 도착시간이 몇 분 남았는지 알려주는 프로그램을 만들고 싶습니다.

// **버스 시간표와 현재 시간이 주어졌을 때 버스 도착 시간이 얼마나 남았는지 알려주는 프로그램**을 만들어주세요.

// - 버스 시간표와 현재 시간이 입력으로 주어집니다.
// - 출력 포맷은 "00시 00분"입니다.
//    만약 1시간 3분이 남았다면 **"01시간 03분"**으로 출력해야 합니다.
// - 버스 시간표에 현재 시간보다 이전인 버스가 있다면 **"지나갔습니다."**라고 출력합니다.


const busTimeTable = (timetable,time) => {
    let result = []
    const times = time.split(':')
    const newTimeMinute = Number(times[0]*60) + Number(times[1])
    
    result = timetable.map(tm => {
        let newTms = tm.split(':')
        let newTmMinute = Number(newTms[0]*60) + Number(newTms[1])
        
        if(newTimeMinute>newTmMinute) return '지나갔습니다'
        else {
            let gap = newTmMinute-newTimeMinute
            let hour = Math.floor(gap/60)
            let minute = gap%60

            return `${String(hour).padStart(2, 0)}시간 ${String(minute).padStart(2, 0)}분`
        }
    })
    return result
}

const timetable = ["12:30", "13:20", "14:13"]
const time = "12:40"

console.log(busTimeTable(timetable,time))