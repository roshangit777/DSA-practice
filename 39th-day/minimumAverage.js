function minimumAverage(nums) {
  let arr = nums.sort((a, b) => a - b);
  let result = 0;
  for (let i = 0; i < arr.length / 2; i++) {
    if (!result) {
      result = (arr[i] + arr[arr.length - (i + 1)]) / 2;
    } else {
      let val = (arr[i] + arr[arr.length - (i + 1)]) / 2;
      if (val < result) {
        result = val;
      }
    }
  }
  return result;
}
let nums = [7, 8, 3, 4, 15, 13, 4, 1];
console.log(minimumAverage(nums));
