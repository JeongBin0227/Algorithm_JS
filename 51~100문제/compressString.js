//문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

const text = 'aaabbbbcdddd'


const compressString = text => {
    const textMap=new Map();
    let texts = text.split('')

    texts.forEach(text => {
        if(textMap.get(text)) textMap.set(text,textMap.get(text)+1)
        else textMap.set(text,1)
    });

    for (let i of textMap){
        console.log(i[0],i[1])
    }
    

compressString(text)