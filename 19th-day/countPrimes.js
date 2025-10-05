let arr = [2, 3, 4, 5, 6, 7, 8, 9];
let newArr = [];
let n = 430348;
function countPrimes(n) {
  const newArr = [];
  for (let i = 2; i < n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      newArr.push(i);
    }
  }

  return newArr.length;
}
console.log(countPrimes(n));
