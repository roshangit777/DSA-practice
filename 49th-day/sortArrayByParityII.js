function sortArrayByParityII(nums) {
  let evenArr = [];
  let oddArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 || nums[i] === 0) {
      evenArr[evenArr.length] = nums[i];
    } else {
      oddArr[oddArr.length] = nums[i];
    }
  }
  let maxLen = evenArr.length > oddArr.length ? evenArr.length : oddArr.length;
  let arr = [];
  for (let i = 0; i < maxLen; i++) {
    if (evenArr[i] || evenArr[i] === 0) {
      arr[arr.length] = evenArr[i];
    }
    if (oddArr[i]) {
      arr[arr.length] = oddArr[i];
    }
  }
  return arr;
}
let nums = [4, 2, 5, 7];
console.log(sortArrayByParityII(nums));
