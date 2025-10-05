let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

for (let i = 1; i <= k; i++) {
  for (let j = 0; j < nums.length; j++) {
    nums[i + 1] = nums[i];
    console.log(nums);
  }
}
console.log(nums);
