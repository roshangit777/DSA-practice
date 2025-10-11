function frequencySort(s) {
  let obj = s.split("").reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  let arr = Object.values(obj);
  let newStr = "";
  for (let i = 0; i < arr.length; i++) {
    let maxFreq = Math.max(...arr);
    Object.keys(obj).forEach((key) => {
      if (obj[key] === maxFreq) {
        for (let i = 1; i <= maxFreq; i++) {
          newStr += key;
        }
        arr[arr.indexOf(maxFreq)] = 0;
      }
    });
  }
  return newStr;
}
let s = "Aabb";
console.log(frequencySort(s));
