const a = "11";
const b = "1";
let sumOfA = 0;
let sumOfB = 0;
let sumOfAB = 0;
let binarySum = "";
function addBinary(a, b) {
  function calA() {
    let val = 1;
    let sum = 0;
    for (let i = a.length - 1; i >= 0; i--) {
      if (a[i] === "1") {
        sum = sum + val;
        val = val + val;
      } else {
        val = val + val;
      }
    }
    return sum;
  }
  function calB() {
    let val = 1;
    let sum = 0;
    for (let i = b.length - 1; i >= 0; i--) {
      if (b[i] === "1") {
        sum = sum + val;
        val = val + val;
      } else {
        val = val + val;
      }
    }
    return sum;
  }
  sumOfAB = calA() + calB();
  binarySum = binarySum + sumOfAB.toString(2);
  return binarySum;
}
console.log(addBinary(a, b));
