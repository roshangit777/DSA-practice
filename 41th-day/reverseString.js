function reverseString() {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    /*  [s[i], s[s.length - (i + 1)]] = [s[s.length - (i + 1)], s[i]]; */
    let a = s[i];
    s[i] = s[s.length - (i + 1)];
    s[s.length - (i + 1)] = a;
  }
  return s;
}
let s = ["h", "e", "l", "l", "o"];
console.log(reverseString(s));
