const s = "abcabcabcabc";

function repeatedSubstringPattern(s) {
  if (s.length === 1) return false;
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) return false;
    if (!(s[i] in obj)) {
      obj[s[i]] = 1;
    } else {
      obj[s[i]] = obj[s[i]] + 1;
    }
  }
  const arr = Object.values(obj);
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] === arr[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
console.log(repeatedSubstringPattern(s));
