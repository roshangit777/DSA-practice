function backspaceCompare(s, t) {
  function firstStr(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "#") {
        if (i > 0) {
          let eles = str.slice(i - 1, i + 1);
          str = str.replace(eles, "");
          break;
        } else {
          str = str.replace("#", "");
        }
      }
    }
    if (str.includes("#")) {
      return firstStr(str);
    } else {
      return str;
    }
  }

  let str1 = firstStr(s);
  let str2 = firstStr(t);

  return str1 === str2;
}
let s = "ab#c";
let t = "ad#c";
console.log(backspaceCompare(s, t));
