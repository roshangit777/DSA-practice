function largestDivisibleSubset(nums) {
  if (nums.length === 1) return nums;
  let newArr = [];
  for (let i = 0; i < nums.length - 1; i += 2) {
    if (nums[i] % nums[i + 1] || nums[i + 1] % nums[i] === 0) {
      newArr.push(nums[i]);
      newArr.push(nums[i + 1]);
    }
  }
  return newArr;
}
let nums = [1, 2, 4, 8];
console.log(largestDivisibleSubset(nums));
