function dominantIndex(nums) {
  let max = Math.max(...nums);
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === max) {
      continue;
    } else if (nums[i] * 2 > max) {
      return -1;
    } else if (!(nums[i] * 2 === max)) {
      count++;
    }
  }
  return count;
}
let nums = [3, 6, 1, 0];
console.log(dominantIndex(nums));
