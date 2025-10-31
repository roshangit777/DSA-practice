/* function moveZeroes(nums) {
  let zeroCounts = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCounts++;
    }
  }
  let arr = nums.filter((item) => item != 0);
  for (let i = 1; i <= zeroCounts; i++) {
    arr[arr.length] = 0;
  }
  nums.length = 0;
  nums.push(...arr);
  return nums;
}
let nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));
console.log(nums); */

/* function moveZeroes(nums) {
  let zeroCounts = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      zeroCounts++;
      nums.splice(i, 1);
      i--;
    }
  }
  for (let i = 1; i <= zeroCounts; i++) {
    nums[nums.length] = 0;
  }
  return nums;
}
let nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums)); */

function moveZeroes(nums) {
  let zeroCounts = 0;
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos] = nums[i];
      zeroCounts++;
      pos++;
    }
  }
  for (let i = pos; i < nums.length; i++) {
    nums[i] = null;
  }
  nums.length = pos;
  for (let i = 1; i < zeroCounts; i++) {
    nums[nums.length] = 0;
  }
  return nums;
}
let nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));
