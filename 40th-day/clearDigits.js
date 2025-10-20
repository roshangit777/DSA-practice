function clearDigits(s) {
  function inner() {
    for (let i = 0; i < s.length; i++) {
      if (Number(s[i]) || s[i] === "0") {
        let idx = s.indexOf(s[i]);
        if (!s[idx - 1]) {
          continue;
        }
        let str = s.slice(idx - 1, idx + 1);
        s = s.replace(str, "");
        return inner();
      }
    }
  }
  inner();
  return s;
}
let s = "3cb4";
console.log(clearDigits(s));
