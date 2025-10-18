function maxProduct(n) {
  let str = String(n);
  let prod = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      let val = Number(str[i]) * Number(str[j]);
      if (val > prod) {
        prod = val;
      }
    }
  }
  return prod;
}
let n = 124;
console.log(maxProduct(n));
