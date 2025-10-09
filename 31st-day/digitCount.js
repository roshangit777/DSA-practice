function digitCount(num) {
  let arr = [];
  let obj = num.split("").reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  for (let i = 0; i < num.length; i++) {
    let indexData = num[i];
    let objectData = obj[i] === undefined ? 0 : obj[i];
    if (objectData == indexData) {
      arr[arr.length] = true;
    } else {
      arr[arr.length] = false;
    }
  }
  return arr.includes(false) ? false : true;
}
let num = "030";
console.log(digitCount(num));
/* console.log(`${objectData}:${indexData}`); */
