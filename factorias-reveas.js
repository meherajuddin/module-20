// function factorial(numbar) {
//   let result = 1;
//   for (let i = numbar; i >= 1; i--) {
//     result = result * i;
//     // console.log(i);
//   }
//   return result;
// }
// const numbar = 6;
// const fact = factorial(numbar);
// console.log("factorial of :", numbar, fact);

function factorial(numbar) {
  let num = numbar;
  let result = 1;
  while (num >= 1) {
    result = result * num;
    num--;
  }
  return result;
}
const numbars = factorial(6);
console.log(numbars);
