`
지식이는 게임을 만드는 것을 좋아합니다. 하지만 매번 다른 크기의 지도와 장애물을 배치하는데 불편함을 겪고 있습니다. 이런 불편함을 해결하기 위해 지도의 크기와 장애물의 위치, 캐릭터의 위치만 입력하면 게임 지형을 완성해 주는 프로그램을 만들고 싶습니다.  지식이를 위해 게임 지형을 만드는 프로그램을 작성해 주세요.

- 가로(n), 세로(m)의 크기가 주어집니다.
- 지형의 테두리는 벽으로 이루어져 있습니다.
- 캐릭터가 있는 좌표가 배열 형태로 주어집니다.
- 장애물이 있는 좌표가 2차원 배열 형태로 주어집니다.

지도는 n x m 크기의 배열이며 배열 안의 값은
   -움직일 수 있는 공간(0)
   -캐릭터(1)
   -벽(2)
3개로 구분되어 있습니다.
`

const make_map = (n,m,char,obj) => {
    let world_map = [];
    for(let i=0; i<m+2; i++){
        world_map.push(Array(n+2).fill(0));
    }

    for(let i in world_map){
        for(let j in world_map[0]){
          if (i==0 || j==world_map[0].length-1 || j==0 || i==world_map.length-1) {
            world_map[i][j] = 2;
          }
        }
      }

      world_map[char[0]+1][char[1]+1] = 1;
    for (let i of obj){
        if (world_map[i[0]+1][i[1]+1] != 1){
        world_map[i[0]+1][i[1]+1] = 2;
        } else {
        world_map[i[0]+1][i[1]+1] = 1;
        }
    }
    console.log(world_map)
}

const 가로 = 4
const 세로 = 5
const 캐릭터위치 = [0,0]
const 장애물 = [[0,1],[1,1],[2,3],[1,3]]

make_map(가로, 세로, 캐릭터위치, 장애물)