function sortArrayByParity(nums) {
  let evenArr = [];
  let oddArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evenArr[evenArr.length] = nums[i];
    } else {
      oddArr[oddArr.length] = nums[i];
    }
  }
  return [...evenArr, ...oddArr];
}
let nums = [3, 1, 2, 4];
console.log(sortArrayByParity(nums));
