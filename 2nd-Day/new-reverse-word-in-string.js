let s = "the sky is blue";
let newStr = "";
function reverseWords(param_1) {
  let str = param_1.split(" ");
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += " " + str[i];
  }
  s = newStr.trim();
  return s;
}
let ret = reverseWords(s);
