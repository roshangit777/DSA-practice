function shortestToChar(s, c) {
  let arr = [];
  function main() {
    if (arr.length === 0) {
      let idx = s.indexOf(c);
      s = s.replace(s[idx], "*");
      for (let i = 0; i < s.length; i++) {
        let len = i < idx ? idx - i : -1 * (idx - i);
        if (s[i] === c || s[i] === "*") {
          arr[i] = 0;
        } else {
          arr[i] = len;
        }
      }
    } else {
      let idx = s.indexOf(c);
      s = s.replace(s[idx], "*");
      for (let i = 0; i < s.length; i++) {
        let len = i < idx ? idx - i : -1 * (idx - i);
        if (s[i] === c || s[i] === "*") {
          arr[i] = 0;
        } else {
          if (len < arr[i]) {
            arr[i] = len;
          }
        }
      }
    }
    if (s.includes(c)) {
      return main();
    }
  }
  main();
  return arr;
}
let s = "aaab";
let c = "b";
console.log(shortestToChar(s, c));
