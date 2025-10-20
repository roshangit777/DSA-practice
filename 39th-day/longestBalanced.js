function longestBalanced(s) {
  let obj = s.split("").reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  let arr = Object.values(obj);
  let maxItem = Math.max(...arr);
  let balance = 0;
  for (let key in obj) {
    if (obj[key] === maxItem) {
      balance += obj[key];
    }
  }
  return balance;
}
let s = "abbac";
console.log(longestBalanced(s));
