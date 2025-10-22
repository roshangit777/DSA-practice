function reverseVowels(s) {
  let vowels = "aeiouAEIOU";
  let revVowels = "";
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      revVowels = revVowels + s[i];
      s = s.replace(s[i], "*");
    }
  }
  let revVowelsIndex = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") {
      s = s.replace(s[i], revVowels[revVowels.length - revVowelsIndex]);
      revVowelsIndex++;
    }
  }
  return s;
}
let s = "leetcode";
console.log(reverseVowels(s));
