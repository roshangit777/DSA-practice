function maxNumberOfBalloons(text) {
  let obj = text.split("").reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  let arr = [];
  let str = "balloon";
  for (let key in obj) {
    if (str.includes(key)) {
      if (key === "o" || key === "l") {
        arr[arr.length] = Math.floor(obj[key] / 2);
      } else {
        arr[arr.length] = obj[key];
      }
    }
  }
  return arr.length === 5 ? Math.min(...arr) : 0;
}
let text = "loonbalxballpoon";
console.log(maxNumberOfBalloons(text));
