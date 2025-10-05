const a = "11";
const b = "1";
let sumOfA = 0;
let sumOfB = 0;
let sumOfAB = 0;
let binarySum;
function addBinary(a, b) {
  let valA = 1;
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] === "1") {
      sumOfA = sumOfA + valA;
      valA = valA + valA;
    } else {
      valA = valA + valA;
    }
  }
  let valB = 1;
  for (let i = b.length - 1; i >= 0; i--) {
    if (b[i] === "1") {
      sumOfB = sumOfB + valB;
      valB = valB + valB;
    } else {
      valB = valB + valB;
    }
  }
  sumOfAB = sumOfA + sumOfB;
  binarySum = sumOfAB.toString(2);
  return parseInt(binarySum);
}
console.log(addBinary(a, b));
