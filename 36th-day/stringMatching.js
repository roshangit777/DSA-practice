function stringMatching(words) {
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i === j) {
        continue;
      } else if (words[i].includes(words[j])) {
        if (!arr.includes(words[j])) {
          arr.push(words[j]);
        }
      }
    }
  }
  return arr;
}
let words = ["blue", "green", "bu"];
console.log(stringMatching(words));
