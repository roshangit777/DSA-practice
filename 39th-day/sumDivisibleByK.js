function sumDivisibleByK(nums, k) {
  let obj = nums.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  let sum = Object.keys(obj).reduce((acc, curr) => {
    if (obj[curr] % k === 0) {
      for (let i = 1; i <= obj[curr]; i++) {
        acc += Number(curr);
      }
    }
    return acc;
  }, 0);
  return sum;
}
let nums = [1, 2, 2, 3, 3, 3, 3, 4];
let k = 2;
console.log(sumDivisibleByK(nums, k));
