let x = 1534236469;
function reverse(x) {
  let y = String(x);
  let newStr = String(y.match(/\d+/g));
  let special = String(y.replace(/\d+/g, ""));
  if (
    special + newStr.split("").reverse().join("") < -2147483648 ||
    special + newStr.split("").reverse().join("") > 2147483647
  ) {
    return 0;
  }
  if (special) {
    return Number(special + newStr.split("").reverse().join(""));
  } else {
    return Number(newStr.split("").reverse().join(""));
  }
}
console.log(reverse(x));
