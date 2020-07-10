var name = 'mary'

names=name.split('')

const newName = names.map(name => {

    if(name.charCodeAt(0)>96) return String.fromCharCode(name.charCodeAt(name)-32)
    else return name
    
})

console.log(newName.join(''))

//console.log(name.toUpperCase());