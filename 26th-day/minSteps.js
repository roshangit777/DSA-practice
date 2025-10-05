/* function minSteps(s, t) {
  let sortS = s.split("").sort().join("");
  let sortT = t.split("").sort().join("");
  if (sortS === sortT) return 0;
  let sortSArr = s.split("");
  let sortTArr = t.split("");
  let count = 0;
  for (let i = 0; i < sortSArr.length; i++) {
    for (let j = 0; j < sortTArr.length; j++) {
      if (sortSArr[i] === sortTArr[j]) {
        sortTArr[j] = null;
        break;
      }
    }
  }
  for (let i = 0; i < sortTArr.length; i++) {
    if (sortTArr[i] !== null) {
      count++;
    }
  }
  return count;
}
let s = "aabbcc";
let t = "abcdef";
console.log(minSteps(s, t)); */

/* the above code is On2 so this is the optimized one */

function minSteps(s, t) {
  let obj = {};
  for (let ch of s) {
    obj[ch] = (obj[ch] || 0) + 1;
  }
  for (let ch of t) {
    if (obj[ch]) {
      obj[ch]--;
    }
  }
  let result = Object.values(obj).reduce((a, b) => a + b, 0);
  return result;
}
let s = "leetcode";
let t = "practice";
console.log(minSteps(s, t));

console.log("cad".includes("cc"));
