function checkPrimeFrequency(nums) {
  let obj = nums.reduce((a, b) => {
    a[b] = (a[b] || 0) + 1;
    return a;
  }, {});
  let arr = Object.values(obj);
  console.log("obj:", obj);
  console.log("arr:", arr);
  let primeFrequencyArr = arr.map((item) => {
    if (item <= 1) return false;
    if (item === 2) return true;
    if (item % 2 === 0) return false;
    for (let i = 3; i * i <= item; i += 2) {
      if (item % i === 0) return false;
    }
    return true;
  });
  return primeFrequencyArr.some((item) => item === true) ? true : false;
}

let nums = [2, 2, 2, 2, 2, 2, 2, 2, 2];
console.log(checkPrimeFrequency(nums));
