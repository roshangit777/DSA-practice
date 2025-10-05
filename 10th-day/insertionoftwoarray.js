let nums1 = [4, 9, 5];
let nums2 = [9, 4, 9, 8, 4];
function intersection(nums1, nums2) {
  let newArr = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        if (!newArr.includes(nums1[i])) {
          newArr.push(nums1[i]);
        }
      }
    }
  }
  return newArr;
}
intersection(nums1, nums2);
