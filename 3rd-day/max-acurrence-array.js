const nums = [1, 3, 2, 1, 3, 1, 2, 4, 3, 3];

function majorityElement(arr) {
  arr.sort((a, b) => a - b);
  let maxKey = arr[0];
  let maxCount = 1;
  let currentCount = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentCount++;
      if (currentCount > maxCount) {
        maxCount = currentCount;
        maxKey = arr[i];
      }
    } else {
      currentCount = 1;
    }
  }
  return maxKey;
}

var ret = majorityElement(nums);
console.log(majorityElement);
