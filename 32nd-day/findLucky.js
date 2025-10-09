function findLucky() {
  let obj = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  let luckyNum = [];
  for (let key in obj) {
    if (key == obj[key]) {
      luckyNum.push(Number(key));
    }
  }
  if (luckyNum.length > 0) {
    return Math.max(...luckyNum);
  } else {
    return -1;
  }
}
let arr = [2, 2, 2, 3, 3];
console.log(findLucky());
