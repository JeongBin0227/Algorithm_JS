// 예를 들어 2번 순회했을 때 변하기 전의 리스트와 변한 후의 리스트의 값은 아래와 같습니다.

// 순회전_리스트 = [10, 20, 25, 27, 34, 35, 39]
// 순회후_리스트 = [35, 39, 10, 20, 25, 27, 34]
// 리스트의_차 = [25, 19, 15, 7, 9, 8, 5]

// 39와 변한 후의 34 값의 차가 5이므로 리스트의 차 중 최솟값입니다. 따라서 39와 34의 인덱스인 6과 39와 34를 출력하는 프로그램을 만들어주세요.

const traversingList = (list, num) => {
    let idx = 0
    let traverList = []
    let c = []

    for(let i=0; i<list.length;i++){
        traverList[(i+num)%list.length] = list[i]
    }
    
    for(let i=0; i<list.length;i++){
        c.push(Math.abs(traverList[i]-list[i]))
    }
    //최솟값
    const d = Math.min.apply(null, c);
		
	//최솟값의 인덱스 구하기
    idx = c.indexOf(d);

    console.log('index: ', idx)
    console.log('value: ', traverList[idx],list[idx])
}

const l = [10, 20, 25, 27, 34, 35, 39]
const num = 2 
traversingList(l,num)