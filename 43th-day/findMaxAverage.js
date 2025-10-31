function findMaxAverage(nums, k) {
  return nums.reduce((a, b) => a + b, 0);
}
let nums = [1, 12, -5, -6, 50, 3];
let k = 4;
console.log(findMaxAverage(nums, k));
