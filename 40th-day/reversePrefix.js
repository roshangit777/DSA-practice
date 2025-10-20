function reversePrefix(word, ch) {
  if (!word.includes(ch)) return word;
  let substr = word.slice(0, word.indexOf(ch) + 1);
  word = word.replace(substr, "");
  let revStr = substr.split("").reverse().join("");
  return revStr + word;
}
let word = "abcdefd";
let ch = "d";
console.log(reversePrefix(word, ch));
