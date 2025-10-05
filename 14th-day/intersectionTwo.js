let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
function intersect(nums1, nums2) {
  if (nums2.length <= nums1.length) {
    let found = nums2.filter((num) => nums1.includes(num));
    return found;
  } else {
    let found = nums1.filter((num) => nums2.includes(num));
    return found;
  }
}
console.log(intersect(nums1, nums2));
