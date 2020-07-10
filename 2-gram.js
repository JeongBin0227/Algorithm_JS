//'Javascript'를 2-gram으로 출력

const twoGram = name => {
    for(let i = 0; i<name.length-1 ;i++){
        const gram = name.charAt(i) + ' ' + name.charAt(i+1)
        console.log(gram)
    }
}

twoGram('Javascript')