function uncommonFromSentences(s1, s2) {
  let s = s1 + " " + s2;
  let sArr = s.split(" ");
  let obj = {};
  let newArr = [];
  for (let i = 0; i < sArr.length; i++) {
    obj[sArr[i]] = (obj[sArr[i]] || 0) + 1;
  }
  for (let word in obj) {
    if (obj[word] === 1) {
      newArr.push(word);
    }
  }
  return newArr;
}
let s1 = "apple apple";
let s2 = "banana";
console.log(uncommonFromSentences(s1, s2));
