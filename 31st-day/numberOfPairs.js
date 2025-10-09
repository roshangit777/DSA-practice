function numberOfPairs(nums) {
  let arr = [];
  let obj = nums.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  let pair = Object.values(obj).map((item) => Math.floor(item / 2));
  let leftOver = Object.values(obj).map((item) => Math.floor(item % 2));
  arr[arr.length] = pair.reduce((acc, curr) => curr + acc, 0);
  arr[arr.length] = leftOver.reduce((acc, curr) => curr + acc, 0);
  return arr;
}
let nums = [1, 2, 3, 4, 5];
console.log(numberOfPairs(nums));
