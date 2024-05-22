function getsum(numbars) {
  let sum = 0;
  for (i = 0; i < numbars.length; i++) {
    const index = i;
    const element = numbars[index];
    sum = sum + element;
    // console.log(index, element, sum);
  }
  return sum;
}

function getOddnumbarsOfArre(numbars) {
  const oddnumbars = [];
  for (i = 0; i < numbars.length; i++) {
    const index = i;
    const element = numbars[index];
    if (element % 2 === 0) {
      oddnumbars.push(element);
      console.log(index, element);
    }
  }
  return oddnumbars;
}

const mynumbars = [12, 15, 17, 18, 16, 12];
const oddnumbars = getOddnumbarsOfArre(mynumbars);
console.log(oddnumbars);
const oddnumbarssum = getsum(oddnumbars);
console.log("odd number sum", oddnumbarssum);
