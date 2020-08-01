function getMaskedName(name) {
    let markingName = name.slice(0,2)
    let markingNum = name.length - 2

    for(let i =0;i<markingNum;i++) markingName+='*'
    
	return markingName;
}

const name = 'KIM TO SU'

console.log(getMaskedName(name))