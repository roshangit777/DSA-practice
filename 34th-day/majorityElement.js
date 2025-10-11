function majorityElement(nums) {
  let obj = nums.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  let threshold = Math.floor(nums.length / 3);
  let majorityElement = [];
  for (let key in obj) {
    if (obj[key] > threshold) {
      majorityElement.push(Number(key));
    }
  }
  return majorityElement;
}
let nums = [1, 2, 1, 2, 2, 3, 3, 1];
console.log(majorityElement(nums));
