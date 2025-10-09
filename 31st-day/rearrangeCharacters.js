let s = "abcba";
let target = "abc";
function rearrangeCharacters() {
  let sObj = {};
  let targetObj = {};
  for (let i = 0; i < s.length; i++) {
    sObj[s[i]] = (sObj[s[i]] || 0) + 1;
  }
  for (let i = 0; i < target.length; i++) {
    targetObj[target[i]] = (targetObj[target[i]] || 0) + 1;
  }
  console.log(sObj);
  return targetObj;
}
console.log(rearrangeCharacters());
