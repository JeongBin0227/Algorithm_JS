function solution(paper) {
    let answer = 0;
    let sum = 0 

    paper.sort((a,b)=> b-a)
    console.log(paper)
    paper.forEach( (eachPaper,index) => {
        sum+=eachPaper
        if(sum>=Math.pow(index+1, 2)) answer = index+1
        console.log('sum',sum)
        console.log('index',index)
    });
    
    return answer;
}

const paper = [7, 5, 18, 10, 6, 9, 5]
console.log(solution(paper))

