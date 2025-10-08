let nums = [4, 3, 2, 1];
function transformArray(nums) {
  nums = nums.map((item) => (item % 2 === 0 ? 0 : 1));
  return nums.sort((a, b) => a - b);
}
console.log(transformArray(nums));
