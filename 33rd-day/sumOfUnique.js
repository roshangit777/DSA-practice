function sumOfUnique(nums) {
  let obj = nums.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  let uniqueSum = Object.keys(obj).reduce((acc, curr) => {
    if (obj[curr] == 1) {
      acc += Number(curr);
    }
    return acc;
  }, 0);
  return uniqueSum;
}
let nums = [1, 2, 3, 2];
console.log(sumOfUnique(nums));
