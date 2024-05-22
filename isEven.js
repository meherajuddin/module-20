// function mymany(many) {
//   const remider = many % 2;
//   if (remider === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const numbars = mymany(153);
// console.log(numbars);

// function meheraj(numbars) {
//   const mehe = numbars % 2;
//   if (mehe === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const sljfjk = meheraj(123);
// console.log(sljfjk);

function meheraj(number) {
  const mehe = number % 4;
  if (mehe === 0) {
    console.log("leap year");
  } else {
    console.log("year");
  }
}
meheraj(2022);
