let word1 = "ab";
let word2 = "pqrs";
function mergeAlternately(word1, word2) {
  let str = "";
  for (
    let i = 0;
    word1.length >= word2.length ? i < word1.length : i < word2.length;
    i++
  ) {
    if (word1[i] && word2[i]) {
      str += word1[i] + word2[i];
    } else if (word1[i] && !word2[i]) {
      str += word1[i];
    } else {
      str += word2[i];
    }
  }
  return str;
}
mergeAlternately(word1, word2);
