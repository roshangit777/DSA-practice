function lengthOfLongestSubstring(s) {
  let str = "";
  let len = 0;
  function findSubstr(len) {
    for (let i = 0; i < s.length - len; i++) {
      let subStr = s.slice(i, len + i + 1);
      let remainStr = s.replace(subStr, " ");
      if (remainStr.includes(subStr)) {
        str = subStr;
      }
    }
    if (len !== s.length - 1) {
      len += 1;
      return findSubstr(len);
    }
  }
  findSubstr(len);
  return str;
}
let s = "pwwkew";
console.log(lengthOfLongestSubstring(s));
