function findMaxK(nums) {
  for (let i = 0; i < nums.length; i++) {
    let max = Math.max(...nums);
    if (nums.includes(max - max * 2) && max != 0) {
      return max;
    } else {
      nums[nums.indexOf(max)] = 0;
    }
  }
  return -1;
}
let nums = [-10, 8, 6, 7, -2, -3];
console.log(findMaxK(nums));
