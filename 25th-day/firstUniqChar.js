/* function firstUniqChar() {
  for (let i = 0; i < s.length; i++) {
    let count = s.split("").reduce((acc, item) => {
      return item === s[i] ? acc + 1 : acc;
    }, 0);
    if (count === 1) {
      return i;
    }
  }
  return -1;
}
let s = "leetcoce";
console.log(firstUniqChar()); */

/* chatgpt ans */

function firstUniqChar() {
  let freq = {};
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) {
      return i;
    }
  }
  return -1;
}
let s = "loveleetcode";
console.log(firstUniqChar());
