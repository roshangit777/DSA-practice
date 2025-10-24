function findMaxConsecutiveOnes(nums) {
  let count = 0;
  let maxCounts = [];
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      maxCounts[maxCounts.length] = count;
      count = 0;
    }
  }
  return Math.max(...maxCounts);
}
let nums = [1, 0, 1, 1, 0, 1];
console.log(findMaxConsecutiveOnes(nums));
