let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
function rotate(arr, k) {
  let newArr = arr.slice(k + 1, arr.length);
  arr.length = arr.length - k;
  return [...newArr, ...arr];
}
console.log(rotate(arr, k));
