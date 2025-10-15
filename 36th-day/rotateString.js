function rotateString(s, goal) {
  if (s === goal) return true;
  let arrStr = s.split("");
  for (let i = arrStr.length - 1; i > 0; i--) {
    let ele = arrStr.pop();
    arrStr.unshift(ele);
    if (goal === arrStr.join("")) {
      return true;
    }
  }
  return false;
}
let s = "abcde";
let goal = "abced";
console.log(rotateString(s, goal));
