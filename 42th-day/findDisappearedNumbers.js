function findDisappearedNumbers(nums) {
  const set = new Set(nums);
  const result = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      result[result.length] = i;
    }
  }
  return result;
}
let nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));
