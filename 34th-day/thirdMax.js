function thirdMax(nums) {
  let arr = nums.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
  if (arr.length <= 2) {
    return Math.max(...arr);
  } else {
    let firstMax = Math.max(...arr);
    arr[arr.indexOf(firstMax)] = Number.NEGATIVE_INFINITY;
    let secondMax = Math.max(...arr);
    arr[arr.indexOf(secondMax)] = Number.NEGATIVE_INFINITY;
    let thirdMax = Math.max(...arr);
    return thirdMax;
  }
}
let nums = [1, 2, -2147483648];
console.log(thirdMax(nums));
