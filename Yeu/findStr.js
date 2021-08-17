function solution(str, find) {
  // RegExp, String, Array 관련 내장함수는 사용할 수 없습니다
  let answer = -1;
  const strLength = str.length;
  const findLength = find.length;

  for (let i = 0; i < strLength - findLength + 1; i++) {
    for (let j = 0; j < findLength; j++) {
      console.log(str[i + j]);
      console.log(find[j]);
      if (str[i + j] !== find[j]) break;
      else {
        if (j === findLength - 1) return i;
      }
    }
  }
  console.log(str);
  console.log(str[0]);
  return answer;
}

console.log(solution("afb", "fb"));
