// https://programmers.co.kr/learn/courses/30/lessons/67257

function solution(expression) {
  var answer = 0;

  answer = formula(expression);

  return answer;
}

//중위 계산식
const formula = (form) => {
  const answerCandidate = [];

  const equationLevel = [
    { "*": 3, "+": 2, "-": 1 },
    { "*": 3, "+": 1, "-": 2 },
    { "*": 2, "+": 3, "-": 1 },
    { "*": 2, "+": 1, "-": 3 },
    { "*": 1, "+": 2, "-": 3 },
    { "*": 1, "+": 3, "-": 2 },
  ];

  equationLevel.forEach((equationNum) => {
    let answer = 0;
    let nums = "";

    const num = [];
    const equation = [];

    // console.log(equationNum);
    form.split("").forEach((element) => {
      // console.log(num);
      // console.log(equation);
      if (element === "*" || element === "-" || element === "+") {
        num.push(Number(nums));
        nums = "";

        // console.log(element);
        if (equation.length === 0) equation.push(element);
        else {
          // console.log(num);
          // console.log(equation);
          // console.log(equationNum[equation[equation.length - 1]]);
          // console.log(equationNum[element]);
          if (
            equationNum[equation[equation.length - 1]] > equationNum[element]
          ) {
            while (equation.length !== 0) {
              let a = num.pop();
              let b = num.pop();
              let c = equation.pop();
              let pushNum = 0;

              if (c === "*") pushNum = b * a;
              else if (c === "+") pushNum = b + a;
              else if (c === "-") pushNum = b - a;

              num.push(Number(pushNum));
            }
            equation.push(element);
          } else {
            equation.push(element);
          }
        }
      } else {
        nums += element;
      }
    });
    num.push(Number(nums));
    while (equation.length !== 0) {
      // console.log(num);
      // console.log(equation);
      let a = num.pop();
      let b = num.pop();
      let c = equation.pop();
      let pushNum = 0;

      if (c === "*") pushNum = b * a;
      else if (c === "+") pushNum = b + a;
      else if (c === "-") pushNum = b - a;

      num.push(pushNum);
    }
    answer = num.pop();
    answerCandidate.push(absoluteValue(answer));
  });

  // console.log(answerCandidate);
  return Math.max.apply(null, answerCandidate);
};
//절댓값
const absoluteValue = (num) => {
  return num > 0 ? num : num * -1;
};

const expression = "100-200*300-500+20";
// const expression = "50*6-3*2";

console.log(solution(expression));
