function reverseOnlyLetters(s) {
  let str = s.replaceAll("-", "");
  let arr = s.split("-").map((item) => item.length);
  for (let i = arr.length - 1; i > 0; i--) {
    console.log(str.slice(i - arr));
  }
  return str;
}
let s = "a-bC-dEf-ghIj";
console.log(reverseOnlyLetters(s));
