//별찍기

const star = num => {
    for(let i = 0; i<num; i++){
        for(let j = 0; j<=num+1/2-i; j++){
            process.stdout.write(' ')
        }
        for(let j = 0; j<=i; j++){
            process.stdout.write('*')
        }
        for(let j = 0; j<i; j++){
            process.stdout.write('*')
        }
        console.log('')
    }
}

star(5)

```답안
const n = prompt('숫자를 입력하세요.');
let tree = '';

for(let i=1; i<=n; i++){
  let star = '';
  for(let j=1; j<=n-i; j++){
    star += ' ';
  }
  for(let k=1; k<=2*i-1; k++){
    star += '*';
  }
  tree += star + '\n';
}

console.log(tree);
```