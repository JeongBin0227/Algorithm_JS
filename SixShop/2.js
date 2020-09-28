function solution(n){
    let threeCount = 0
    
    while( n >= 3*threeCount ){
        if( (n-(3*threeCount))%5===0)return threeCount+ (n-(3*threeCount))/5
        threeCount ++
    }

    return -1

}


