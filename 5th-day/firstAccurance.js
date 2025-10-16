let haystack = "leetcode";
let needle = "leeto";

function strStr(haystack, needle) {
  if (haystack.includes(needle)) {
    return haystack.indexOf(needle);
  } else {
    return -1;
  }
}
strStr(haystack, needle);
