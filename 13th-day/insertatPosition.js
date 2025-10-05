let nums = [1, 3, 5, 6];
let target = 5;
function searchInsert(nums, target) {
  nums.push(target);
  let newArr = nums.sort((a, b) => a - b);
  return newArr.indexOf(target);
}
console.log(searchInsert(nums, target));
