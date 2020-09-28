function solution(N, relations) {
    const relationList = relations.reduce((relationList, relation) => {
      relationList[relation[0] - 1].add(relation[1] - 1)
      relationList[relation[1] - 1].add(relation[0] - 1)
  
      return relationList
    }, Array.from({
      length: N
    }, () => new Set()))
  
    const result = relationList.reduce((result, relation, index) => {
      relation.forEach((node) => {
        relationList[node].forEach((other) => {
          result[index].add(other)
        })
      })
      return result
    }, relationList.map((relation, index) => new Set(relation).add(index)))
  
    console.log(result)
    console.log(relationList)
    return result.map(item => item.size - 1)
  }
  
// const n = 15 
const n = 7
const relations = [[1,2],[4,2],[3,1],[4,5],[6,7]]
console.log(solution(n,relations))
