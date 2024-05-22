// 1 + 2 + 3 + 4 + 5 + 6+ 7
function sumOfNumber(numbar) {
  let sum = 0;
  for (i = 1; i <= numbar; i++) {
    sum = sum + i;
    console.log(i, sum);
  }
  return sum;
}
sumOfNumber(20);
