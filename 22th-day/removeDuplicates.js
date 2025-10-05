let nums = [-1, 0, 0, 0, 0, 3, 3];
function removeDuplicates(nums) {
  let obj = {};
  let countDuplicate = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = 1;
    if (obj.hasOwnProperty(nums[i])) {
      if (obj[nums[i]] == 2) {
        countDuplicate++;
      } else {
        count++;
        obj[nums[i]] = count;
      }
    } else {
      obj[nums[i]] = count;
    }
  }
  nums.length = 0;
  for (let key in obj) {
    for (let i = 1; i <= obj[key]; i++) {
      nums.push(Number(key));
    }
  }
  return obj;
}
console.log(removeDuplicates(nums));

//chatgpt

function removeDuplicates(nums) {
  let k = 0;
  for (let n of nums) {
    if (k < 2 || n > nums[k - 2]) {
      nums[k] = n;
      k++;
    }
  }
  return k;
}
let nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums));
