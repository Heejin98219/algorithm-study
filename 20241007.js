// 두 수의 나눗셈
function solution(num1, num2) {
  var answer = 0;
  if (0 < num1 <= 100 && 0 < num2 <= 100) {
    answer = (num1 / num2) * 1000;
  }
  return Math.floor(answer);
}

console.log(solution(3, 2));

console.log(solution(7, 3));

console.log(solution(1, 16));
