function sortSentence(s) {
  let sentenceArr = s.split(" ");
  let arr = Array(sentenceArr.length).fill(undefined);
  for (let i = 0; i < sentenceArr.length; i++) {
    let num = sentenceArr[i][sentenceArr[i].length - 1];
    arr[Number(num) - 1] = sentenceArr[i].replace(num, "");
  }
  return arr.join(" ");
}
let s = "Myself2 Me1 I4 and3";
console.log(sortSentence(s));
