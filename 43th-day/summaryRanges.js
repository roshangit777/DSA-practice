function summaryRanges(nums) {
  let arr = [];
  let newArr = [];
  for (let i = 0; i <= nums[nums.length - 1]; i++) {
    if (nums.includes(i)) {
      arr.push(i);
    } else {
      newArr[newArr.length] = arr;
      arr.length = 0;
    }
  }
  return newArr;
}
let nums = [0, 1, 2, 4, 5, 7];
console.log(summaryRanges(nums));
