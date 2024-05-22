// 1 * 2 * 2 * 3 * 4 * 5 6
function malitipikeshonOfnumbar(numbar) {
  let result = 1;
  for (let i = 1; i <= numbar; i++) {
    result = result * i;
  }
  return result;
}
const result = malitipikeshonOfnumbar(9);
console.log(result);
