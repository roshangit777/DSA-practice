function getLeastFrequentDigit(n) {
  let numStr = `${n}`;
  let numArr = numStr.split("");
  let obj = numArr.reduce((a, b) => {
    a[b] = (a[b] || 0) + 1;
    return a;
  }, {});
  let leastDigit = Object.keys(obj).reduce((a, b) => (obj[b] < obj[a] ? b : a));
  return Number(leastDigit);
}
let n = 723344511;
console.log(getLeastFrequentDigit(n));
