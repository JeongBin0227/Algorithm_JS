//false 로 취급하는 것들

const checkBoolean = variable =>{
    if(variable) console.log(true)
    else console.log(false)
}

checkBoolean(NaN)
checkBoolean('')
checkBoolean(0)
checkBoolean(undefined)
