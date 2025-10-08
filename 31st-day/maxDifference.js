function maxDifference(s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = (obj[s[i]] || 0) + 1;
  }
  let evenSeries = Object.values(obj).filter((item) => item % 2 === 0);
  let oddSeries = Object.values(obj).filter((item) => item % 2 !== 0);
  let result = Math.max(...oddSeries) - Math.min(...evenSeries);
  return result;
}
let s = "mmsmsym";
console.log(maxDifference(s));
