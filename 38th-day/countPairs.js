/* function countPairs(nums, target) {
  let arr = [];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      } else {
        let isThere = arr.some((a) =>
          a.every((x, y) => x === [nums[i], nums[j]][y])
        );
        if (nums[i] + nums[j] < target && !isThere) {
          count++;
          arr[arr.length] = [nums[i], nums[j]];
        }
      }
    }
  }
  return arr;
}
let nums = [-1, 1, 2, 3, 1];
let target = 2;
console.log(countPairs(nums, target)); */

function countPairs(nums, target) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) {
        count++;
      }
    }
  }
  return count;
}
let nums = [-6, 2, 5, -2, -7, -1, 3];
let target = -2;
console.log(countPairs(nums, target));
