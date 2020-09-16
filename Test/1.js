function solution(n, s, a, b, fares) {
    var answer = 0;
    return answer;
}

const graph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"],
  };
  
  const Node = {
    init: function (name, priority) {
      this.name = name;
      this.priority = priority;
    },
  };
  
  const PriorityQueue = {
    init: function () {
      this.values = [];
    },
    enqueue: function (name, priority) {
      const newNode = Object.create(Node);
      newNode.init(name, priority);
  
      this.values.push(newNode);
      let idxOfNewNode = this.values.length - 1;
      while (idxOfNewNode > 0) {
        const idxOfParent = Math.floor((idxOfNewNode - 1) / 2);
        const parentNode = this.values[idxOfParent];
        if (parentNode.priority > newNode.priority) {
          this.values[idxOfParent] = newNode;
          this.values[idxOfNewNode] = parentNode;
          idxOfNewNode = idxOfParent;
        }
        break;
      }
      return this.values;
    },
    dequeue: function () {
      if (this.values.length == 0) {
        return;
      }
  
      if (this.values.length == 1) {
        return this.values.pop();
      }
      const last = this.values.pop();
      const dequeued = this.values[0];
      this.values[0] = last;
      let idxOfLast = 0;
  
      while (true) {
        const idxOfLeftChild = 2 * idxOfLast + 1;
        const idxOfRightChild = 2 * idxOfLast + 2;
        const leftChild = this.values[idxOfLeftChild];
        const rightChild = this.values[idxOfRightChild];
  
        function swap(direction) {
          const child = direction == "left" ? leftChild : rightChild;
          const idxOfChild =
            direction == "left" ? idxOfLeftChild : idxOfRightChild;
          this.values[idxOfLast] = child;
          this.values[idxOfChild] = last;
          idxOfLast = idxOfChild;
        }
  
        // 양쪽 자식이 다 없을 때
        if (!leftChild) {
          return dequeued;
        }
  
        // 오른쪽 자식만 없을 떄
        if (!rightChild) {
          if (leftChild.priority < last.priority) {
            swap.call(this, "left");
            continue;
          }
          return dequeued;
        }
  
        // 양쪽 자식이 다 있는데, 두 자식의 우선순위가 같을 때
        if (leftChild.priority == rightChild.priority) {
          swap.call(this, "left");
          // 어느 쪽으로 스왑해도 무방
          continue;
        }
  
        // 양쪽 자식이 다 있을 때 && 왼쪽으로 스왑해야 할 때
        if (
          leftChild.priority < rightChild.priority &&
          leftChild.priority < last.priority
        ) {
          swap.call(this, "left");
          continue;
        }
  
        // 양쪽 자식이 다 있을 때 && 오른쪽으로 스왑해야 할 때
        if (
          rightChild.priority < leftChild.priority &&
          rightChild.priority < last.priority
        ) {
          swap.call(this, "right");
          continue;
        }
      }
    },
  };
  
  const pq = Object.create(PriorityQueue);
  
  function findShortestWay(start, end) {
    const distance = {};
    const visitedHash = {};
    const previous = {};
    for (const key in graph) {
      distance[key] = key == start ? 0 : Infinity;
      previous[key] = null;
    }
    pq.init();
    pq.enqueue(start, 0);
  
    while (true) {
      const dequeued = pq.dequeue().name;
      if (dequeued == end) {
        break;
      }
      const neighbors = graph[dequeued];
      for (const currentNeighbor of neighbors) {
        if (visitedHash.hasOwnProperty(currentNeighbor)) {
          continue;
        }
        const distanceFromStart = distance[dequeued] + 1;
        //가중치 없으니 노드 간의 거리는 무조건 1
        if (distanceFromStart < distance[currentNeighbor]) {
          distance[currentNeighbor] = distanceFromStart;
          previous[currentNeighbor] = dequeued;
          pq.enqueue(currentNeighbor, distanceFromStart);
        }
        debugger;
      }
      visitedHash[dequeued] = true;
    }
    let node = end;
    const route = [];
    while (node) {
      route.unshift(node);
      node = previous[node];
    }
    return route;
  }
  
  const result = findShortestWay("A", "F");
  console.log(result);
  
// function sort(strings){
//     strings.sort(function(a,b){
//         var first = a[n];
//         var second = b[n];
//         if(first === second){
//             return (a > b) - (a < b);
//         }else{
//             return (first > second) - (first < second);
//         }
//     })
// }
const n = 6
const s = 4
const a = 6
const b = 2
const fares	 = [[4, 1, 10], [3, 5, 24], [5, 6, 2], [3, 1, 41], [5, 1, 24], [4, 6, 50], [2, 4, 66], [2, 3, 22], [1, 6, 25]]

console.log(solution(n, s, a, b, fares))