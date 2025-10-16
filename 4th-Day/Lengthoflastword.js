let s = "Hello world";
function lengthOfLastWord(s) {
  if (s.length === 0) {
    return 0;
  }
  s = s.trim();
  let stArr = s.split(" ");
  return stArr[stArr.length - 1].length;
}
let ret = lengthOfLastWord(s);
