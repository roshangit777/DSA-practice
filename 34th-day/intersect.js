function intersect(nums1, nums2) {
  let newArr = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      console.log(`${nums1[i]}:${nums2[j]}`);
      if (nums1[i] === nums2[j]) {
        newArr.push(Number(nums1[i]));
        nums1[i] = "a";
        nums2[j] = "b";
        break;
      }
    }
  }
  return newArr;
}
let nums1 = [1, 2, 2, 1];
let nums2 = [2];
console.log(intersect(nums1, nums2));
