// a = [1, 2, 3, 4]
// b = [a, b, c, d]
// 이런 리스트가 있을 때 **[[1, a], [b, 2], [3, c], [d, 4]]
// 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.

const modifiedList = (arr1,arr2) => {
    let newList = []

    for(let i = 0 ; i<arr1.length; i++ ){
        let tmp = []
        tmp.push(arr1[i],arr2[i])
        newList.push(tmp)
    }
    return newList
}

const arr1 = [1, 2, 3, 4]
const arr2 = ['a', 'b', 'c', 'd'] 

console.log(modifiedList(arr1,arr2))