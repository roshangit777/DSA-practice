let s = "acb";
let t = "ahbgdc";

function isSubsequence() {
  let count = 0;
  for (let i = 0; i <= s.length; i++) {
    for (let j = 0; j <= t.length; j++) {
      if (s[i] === t[j]) {
        count = 1;
        break;
      } else {
        count = 0;
      }
    }
    if (count === 0) {
      return false;
    }
  }
  if (count === 1) {
    return true;
  }
}
console.log(isSubsequence());
