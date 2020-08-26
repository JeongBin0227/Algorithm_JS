`
문제:
그냥 먹방을 하면 다른 방송과 차별성이 없기 때문에 무지는 아래와 같이 독특한 방식을 생각해냈다.

회전판에 먹어야 할 N 개의 음식이 있다.
각 음식에는 1부터 N 까지 번호가 붙어있으며, 각 음식을 섭취하는데 일정 시간이 소요된다.
무지는 다음과 같은 방법으로 음식을 섭취한다.

무지는 1번 음식부터 먹기 시작하며, 회전판은 번호가 증가하는 순서대로 음식을 무지 앞으로 가져다 놓는다.
마지막 번호의 음식을 섭취한 후에는 회전판에 의해 다시 1번 음식이 무지 앞으로 온다.
무지는 음식 하나를 1초 동안 섭취한 후 남은 음식은 그대로 두고, 다음 음식을 섭취한다.
다음 음식이란, 아직 남은 음식 중 다음으로 섭취해야 할 가장 가까운 번호의 음식을 말한다.
회전판이 다음 음식을 무지 앞으로 가져오는데 걸리는 시간은 없다고 가정한다.
무지가 먹방을 시작한 지 K 초 후에 네트워크 장애로 인해 방송이 잠시 중단되었다.
무지는 네트워크 정상화 후 다시 방송을 이어갈 때, 몇 번 음식부터 섭취해야 하는지를 알고자 한다.
각 음식을 모두 먹는데 필요한 시간이 담겨있는 배열 food_times, 네트워크 장애가 발생한 시간 K 초가 매개변수로 주어질 때 몇 번 음식부터 다시 섭취하면 되는지 return 하도록 solution 함수를 완성하라

제한사항:
food_times 는 각 음식을 모두 먹는데 필요한 시간이 음식의 번호 순서대로 들어있는 배열이다.
k 는 방송이 중단된 시간을 나타낸다.
만약 더 섭취해야 할 음식이 없다면 -1을 반환하면 된다.

입출력
food_times	   k	  result
[3, 1, 2]	   5      1
`

function solution(food_times, k) {
    let answer = 0;
    let tmp = 0
    // let zeroCount = food_times.length
    let zeroCount = 0
    let zeroCheck = false
    let minPosition = -1
    let infinityNum = 0
    let foodSum = 0

    food_times.forEach(food=>foodSum+=food)
    if(k>foodSum) return -1
    
    while(k>=(food_times.length-zeroCount)){
        let minNum = Infinity
        zeroCount=0
        for(let i=0;i<food_times.length;i++){
            if(minNum>=food_times[i]&&food_times[i]!==0){
                minNum = food_times[i]
            }
            if(food_times[i]===0) zeroCount++
        }
        if(k - (food_times.length-zeroCount) * minNum>=0){
            k = k - (food_times.length-zeroCount) * minNum

            zeroCount = 0
            for(let i=0;i<food_times.length;i++){
                if(food_times[i]!==0) {
                    food_times[i] -= minNum
                }
                if(food_times[i]===0) zeroCount++
            
            }
        }
        else{
            while(0>k - (food_times.length-zeroCount) * minNum){
                minNum-=1   
            }
            k = k - (food_times.length-zeroCount) * minNum
            break
        }
    }

    let position = 0
    while(k!==0){
        position = position%food_times.length
        if(food_times[position]!==0) {
            food_times[position] -=1
            k--
            minPosition=position
        }
        position++
    }
    for(let i=0;i<food_times.length;i++){
        minPosition = (minPosition + 1)%food_times.length
        if(food_times[minPosition]!==0) return minPosition+1
    }
}

// const food_times = [3, 1, 2]
// const k = 5
const food_times = [1,1,1,1,1,1 ]
const k = 1
console.log(solution(food_times, k))