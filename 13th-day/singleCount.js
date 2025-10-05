/* let nums = [2, 2, 1];
function singleNumber(nums) {
  let obj = {};
  for (let num of nums) {
    if (Object.keys(obj).includes(num.toString())) {
      obj[num.toString()] = obj[num.toString()] + 1;
    } else {
      obj[num] = 1;
    }
  }
  let least = Math.min(...Object.values(obj));
  let result = Number(Object.keys(obj).find((key) => obj[key] === least));
  return result;
}
console.log(singleNumber(nums));
 */

function singleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num; // XOR operation
  }
  return result;
}

// Example Test Cases
console.log(singleNumber([2, 2, 1])); // Output: 1
console.log(singleNumber([4, 1, 2, 1, 2])); // Output: 4
console.log(singleNumber([1])); // Output: 1
