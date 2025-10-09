function canArrange(arr, k) {
  for (let i = 1; i <= arr.length / 2; i++) {
    let sum = arr[i - 1] + arr[arr.length - i];
    if (sum % k === 0) {
      return false;
    }
  }
  return true;
}
let arr = [-1, 1, -2, 2, -3, 3, -4, 4];
let k = 3;
console.log(canArrange(arr, k));
/* console.log(1 + -4);
console.log(-1 % 3); */
console.log((((-2 + 3) % 3) + k) % 3);
