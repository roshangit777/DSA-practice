function largeGroupPositions(s) {
  let arr = [];
  let obj = s.split("").reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  let maxVal = Math.max(...Object.values(obj));
  for (let key in obj) {
    if (obj[key] === maxVal) {
      let value = s.indexOf(key);
      arr.push([value, value + maxVal - 1]);
    }
  }
  return arr;
}
let s = "abbxxxxzzy";
console.log(largeGroupPositions(s));
