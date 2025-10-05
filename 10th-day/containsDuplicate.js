let nums = [2, 14, 22, 22];
function containsDuplicate(nums) {
  let mySet = new Set(nums);
  let newArr = [...mySet];
  if (nums.length === newArr.length) {
    return false;
  } else {
    return true;
  }
}
console.log(containsDuplicate(nums));
