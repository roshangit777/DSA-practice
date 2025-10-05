let dividend = -2147483648;
let divisor = -1;
function divide(dividend, divisor) {
  let sum = dividend / divisor;
  if (sum === -1) {
    return sum;
  }
  if (sum === 2147483648) {
    return sum - 1;
  }
  if (sum < 0) {
    sum++;
    return Math.floor(sum);
  } else {
    return Math.floor(sum);
  }
}
console.log(divide(dividend, divisor));
