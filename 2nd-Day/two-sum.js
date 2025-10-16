let nums = [0, 4, 3, 0];
let target = 0;
function twoSum() {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return result.push[(i, j)];
      } else if (nums[i] === target) {
        return result.push([i]);
      } else if (nums[j] === target) {
        return result.push([j]);
      }
    }
  }
}
const result = twoSum();
console.log(result);
