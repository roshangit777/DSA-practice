function distinctAverages(nums) {
  let len = nums.length / 2;
  let arr = nums.sort((a, b) => a - b);
  let newArr = [];
  for (let i = 0; i < len; i++) {
    let min = arr.shift();
    let max = arr.pop();
    newArr[newArr.length] = Math.floor((min + max) / 2);
  }
  let obj = newArr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  let max = Math.max(...Object.values(obj));
  if()
  return obj[myKey];
}
let nums = [4, 1, 4, 0, 3, 5];
console.log(distinctAverages(nums));
