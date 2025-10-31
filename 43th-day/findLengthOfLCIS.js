function findLengthOfLCIS(nums) {
  let arr = [];
  for (let i = 0; i < nums.length - 1; i++) {
    let len = nums[i + 1] - nums[i];
    arr[arr.length] = len + 1;
  }
  let obj = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  let maxLen = Math.max(...Object.values(obj));
  for (let key in obj) {
    if (obj[key] === maxLen) {
      return Number(key);
    }
  }
}
let nums = [1, 3, 5, 4, 7];
console.log(findLengthOfLCIS(nums));
