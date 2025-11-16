function isMonotonic(nums) {
  let isAscending = () => {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        return false;
      }
    }
    return true;
  };
  let isDescending = () => {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] < nums[i + 1]) {
        return false;
      }
    }
    return true;
  };

  if (isAscending() === false && isDescending() === false) {
    return false;
  } else {
    return true;
  }
}
let nums = [1, 2, 2, 3];
console.log(isMonotonic(nums));
