`
소정이는 어떤 숫자에서 k개의 수를 뽑았을 때 가장 큰 수를 찾는 놀이를 하고 있습니다. 
예를 들어, 숫자 1723에서 두 개의 수를 뽑으면 [17, 12, 13, 72, 73, 23] 을 만들 수 있습니다.
이 중 가장 큰 수는 73입니다.

위 예시처럼 **어떤 수 n에서 k개의 수를 선택하여 만들 수 있는 수 중에서 가장 큰 수**를 찾아 주세요.
`

const maxNum = num => {
    let nums = num.toString().split('')
    nums.sort((a, b) => {return b-a});
    console.log(Number(nums[0]+nums[1]))
}

const num = 1723

maxNum(num)