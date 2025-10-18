function triangleType(nums) {
  if (nums[0] === nums[1] && nums[0] === nums[2]) {
    return "equilateral";
  } else if (nums[0] === nums[1] || nums[0] === nums[2]) {
    return "isosceles ";
  } else if (nums[0] != nums[1] && nums[0] != nums[2]) {
    return "scalene  ";
  }
}
let nums = [3, 4, 5];
console.log(triangleType(nums));
