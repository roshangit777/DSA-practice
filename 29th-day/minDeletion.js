function minDeletion(s, k) {
  let obj = s.split("").reduce((a, b) => {
    a[b] = (a[b] || 0) + 1;
    return a;
  }, {});
  let arr = Object.values(obj).sort((a, b) => b - a);
  let deletedVal = 0;
  while (arr.length > k) {
    deletedVal += arr.pop();
  }
  return deletedVal;
}
let s = "yyyzz";
let k = 1;
console.log(minDeletion(s, k));
