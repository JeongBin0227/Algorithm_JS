function solution(blocks) {
    const blockTree = blocks.reduce((blockTree, block, depth) => {
      if (depth === 0) return blockTree
  
      const index = block[0]
      let [backward, forward] = [index - 1, index + 1]
      while (true) {
        if (backward >= 0) blockTree[depth][backward] = findValue(depth, backward, blockTree)
        if (forward <= depth) blockTree[depth][forward] = findValue(depth, forward, blockTree)
  
        if (backward < 0 && forward > depth) break
        backward--
        forward++
      }
  
      return blockTree
    }, generateTree(blocks))
  
    return blockTree.reduce((result, block) => [...result, ...block], [])
  }
  
  function generateTree(blocks) {
    return blocks.map((block, index) => {
      const newBlock = []
      for (let i = 0; i < index + 1; i++) {
        newBlock.push(i === block[0] ? block[1] : undefined)
      }
      return newBlock
    })
  }
  
  function findValue(depth, targetIndex, blockTree) {
    if (blockTree[depth - 1][targetIndex - 1] !== undefined && blockTree[depth][targetIndex - 1] !== undefined) {
      return blockTree[depth - 1][targetIndex - 1] - blockTree[depth][targetIndex - 1]
    } else if (blockTree[depth - 1][targetIndex] !== undefined && blockTree[depth][targetIndex + 1] !== undefined) {
      return blockTree[depth - 1][targetIndex] - blockTree[depth][targetIndex + 1]
    }
  }