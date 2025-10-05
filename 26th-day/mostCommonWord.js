let paragraph = "a, a, a, a, b,b,b,c, c";
let banned = ["a"];
function mostCommonWord() {
  let arr = paragraph.toLowerCase().match(/\w+/g);
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    if (!banned.includes(str)) {
      obj[str] = (obj[str] || 0) + 1;
    }
  }
  let result = Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
  console.log(result);
}
mostCommonWord();
