/* let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

function plusOne(digits) {
  if (digits.length > 10) {
    let midpoint = Math.floor(digits.length / 2);

    // Split the array
    let firstHalf = digits.slice(0, midpoint);
    let secondHalf = digits.slice(midpoint);
    let secondHalfStr = Number(secondHalf.join("")) + 1;
    let arr = Array.from(secondHalfStr.toString(), Number);
    let finalArr = [...firstHalf, ...arr];
    return finalArr;
  }
  let digiStr = Number(digits.join("")) + 1;
  let newArr = Array.from(digiStr.toString(), Number);
  return newArr;
}
console.log(plusOne(digits));
 */

function plusOne(digits) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + carry;
    digits[i] = sum % 10;
    carry = Math.floor(sum / 10);
    if (carry === 0) break;
  }
  if (carry > 0) {
    digits.unshift(carry);
  }
  return digits;
}

let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
console.log(plusOne(digits));
