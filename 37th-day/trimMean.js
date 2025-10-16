function trimMean(arr) {
  let calPer = Math.floor((arr.length / 100) * 5);
  arr = arr.sort((a, b) => a - b);
  for (let i = 1; i <= calPer; i++) {
    arr.pop();
    arr.shift();
  }
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
}
let arr = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3];
console.log(trimMean(arr));
