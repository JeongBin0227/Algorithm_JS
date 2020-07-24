`
지뢰를 찾는 문제입니다. 다음 그림처럼 깃발 주위에는 지뢰가 사방으로 있습니다. **깃발의 위치를 입력받아 지뢰와 함께 출력 해주는 프로그램**을 만드세요.

- 아래 Case 외 예외 사항은 고려하지 않습니다.
(예를 들어 깃발이 붙어 있을 경우는 고려하지 않습니다.) 
실력이 되시는 분들은 깃발이 붙어있을 상황까지 고려해 주세요.
`

const mine = 
[
   [ 0, 1, 0, 0, 0],
   [ 0, 0, 0, 0, 0],
   [ 0, 0, 0, 1, 0],
   [ 0, 0, 1, 0, 0],
   [ 0, 0, 0, 0, 0],
]

const minesweeper = mine => {
    let newMine = []
    // let a = [1,2,3,4,5]

    // console.log(a)
    
    // a.forEach(element => element*3);
    mine.map((ms,index) => {
        return ms.map(m=>{
            if(m===1) {
                const tmp = ms.indexOf(1)
                mine[index][tmp] = 'f'
                  if (index-1 > -1){
                    mine[index-1][tmp] = '*';
                  }
                  if (5>tmp+1){
                    mine[index][tmp+1] = '*';
                  }
                  if (tmp-1 > -1){
                    mine[index][tmp-1] = '*';
                  }
                  if (5>index+1){
                    mine[index+1][tmp] = '*';
                  }
            }
            else return 0
        })
    });

    console.log(mine)
}

minesweeper(mine)