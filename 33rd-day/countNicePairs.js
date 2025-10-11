function revNum(str) {
  let num = "";
  for (let i = str.length - 1; i >= 0; i--) {
    num += str[i];
  }
  return num;
}

function countNicePairs(nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let pairOne = nums[i] + Number(revNum(String(nums[j])));
      let pairTow = Number(revNum(String(nums[i]))) + nums[j];
      if (pairOne === pairTow) {
        count++;
      }
    }
  }
  return count;
}
let nums = [42, 11, 1, 97];
console.log(countNicePairs(nums));
