function majorityFrequencyGroup(s) {
  let result = "";
  let obj = s.split("").reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  let obj2 = Object.values(obj).reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  let maxGroup = Math.max(...Object.values(obj2));
  for (let key in obj2) {
    if (obj2[key] === maxGroup) {
      for (let item in obj) {
        if (obj[item] === Number(key)) {
          result += item;
        }
      }
    }
  }
  return result;
}
let s = "pfpfgi";
console.log(majorityFrequencyGroup(s));
