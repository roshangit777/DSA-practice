function numberOfWays(s, t, k) {
  let count = 0;
  let sArr = s.split("");
  for (let i = sArr.length - 1; i > 0; i--) {
    let ele = sArr.pop();
    sArr.unshift(ele);
    let newStr = sArr.join("");
    if (newStr != t) {
      count++;
    } else {
      count++;
      return count;
    }
  }
  return count;
}
let s = "abcd";
let t = "cdab";
let k = 2;
console.log(numberOfWays(s, t, k));
