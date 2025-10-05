let nums = [2, 0, 2, 1, 1, 0];
function sortColors(nums) {
  let red = [];
  let white = [];
  let blue = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      red.push(nums[i]);
    } else if (nums[i] === 1) {
      white.push(nums[i]);
    } else {
      blue.push(nums[i]);
    }
  }
  let newArr = [...red, ...white, ...blue];
  for (let i = 0; i < newArr.length; i++) {
    nums[i] = newArr[i];
  }
  return nums;
}
console.log(sortColors(nums));

/* if (nums[i] < nums[i - 1]) {
  [nums[i - 1], nums[i]] = [nums[i], nums[i - 1]]; */
