let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
function rotate(nums, k) {
  for (let i = 0; i < k; i++) {
    nums.length = nums.length + 1;
    for (let j = nums.length - 1; j >= 0; j--) {
      nums[j] = nums[j - 1];
    }
    nums[0] = nums[nums.length - 1];
    nums.pop();
  }
  return nums;
}
console.log(rotate(nums, k));
