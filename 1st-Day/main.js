/* let num1 = [1, 2, 3, 0, 0, 0];
let num2 = [2, 5, 6];
let m = 3;
let n = 3;
let count = n;
for (let i = 0; i <= m - 1; i++) {
  num1[count] = num2[i];
  count++;
}

for (let i = 0; i < num1.length; i++) {
  if (num1[i] >= num1[i + 1]) {
    [num1[i], num1[i + 1]] = [num1[i + 1], num1[i]];
  }
}
console.log(num1); */

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3;
let n = 3;

function merge(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
}

merge(nums1, m, nums2, n);

console.log(nums1);
