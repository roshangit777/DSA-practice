let nums = [1, 2, 3, 4];
function productExceptSelf(nums) {
  let finalArray = [];
  for (let i = 0; i < nums.length; i++) {
    let newArray = nums;
    console.log(newArray);
    newArray[i] = 1;
    let arrStr = newArray.join("*");
    finalArray[i] = eval(arrStr);
  }
  return finalArray;
}
console.log(productExceptSelf(nums));
console.log(nums);
