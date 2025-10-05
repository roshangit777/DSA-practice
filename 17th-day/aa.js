const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
function rotate(nums, k) {
  let arr = [];
  let newArr = [];
  for (let i = 1; i <= k; i++) {
    arr.push(nums[k + i]);
  }
  for (let i = 0; i <= k; i++) {
    newArr.push(nums[i]);
  }
  return [...arr, ...newArr];
}
console.log(rotate(nums, k));
