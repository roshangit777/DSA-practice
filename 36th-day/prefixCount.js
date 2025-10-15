function prefixCount(words, pref) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (pref === words[i].slice(0, pref.length)) {
      count++;
    }
  }
  return count;
}
let words = ["leetcode", "win", "loops", "success"];
let pref = "code";
console.log(prefixCount(words, pref));
