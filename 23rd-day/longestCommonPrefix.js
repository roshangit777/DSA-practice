let strs = ["dog", "racecar", "car"];
function longestCommonPrefix() {
  let arr = [];
  let newArr = [];
  let prefixStr = "";
  for (let i = 0; i < strs.length; i++) {
    prefixStr = "";
    if (arr.length === 0) {
      arr = strs[i].split("");
    } else {
      newArr = strs[i].split("");
      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] == arr[i]) {
          prefixStr += newArr[i];
        }
      }
    }
  }
  return prefixStr;
}
console.log(longestCommonPrefix());
