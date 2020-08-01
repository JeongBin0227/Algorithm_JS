function splitDutchPayAmount(peopleCount, amount) {
    let answer = []
    let moeny = Math.floor(amount/peopleCount)
    let remainderMaoney = amount%peopleCount

    answer.push(remainderMaoney+moeny)
    for(let i=0;i<peopleCount-1;i++) answer.push(moeny)
    
	return answer;
}

