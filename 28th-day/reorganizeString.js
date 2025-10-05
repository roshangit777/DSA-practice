let s = "aaab";
function reorganizeString() {
  /* let countSameChar = 0;
  let checkSameChar = ""; */
  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      if (s[i] !== s[i + 2]) {
        return (newStr += `${s[i]}${s[i + 2]}${s[i + 1]}`);
      }
    } else {
      return "";
    }
  }
}
console.log(reorganizeString());
