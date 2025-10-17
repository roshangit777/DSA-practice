function minimumOperations(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!nums.every((item) => item === 0)) {
      count++;
      let newArr = nums.filter((item) => item != 0);
      let min = Math.min(...newArr);
      for (let k = 0; k < nums.length; k++) {
        if (nums[k] != 0) {
          nums[k] = nums[k] - min;
        }
      }
    } else {
      return count;
    }
  }
  return count;
}
let nums = [1, 5, 0, 3, 5];
console.log(minimumOperations(nums));
