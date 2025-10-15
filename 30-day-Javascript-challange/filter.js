let filter = (arr, fn) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isGreated = fn(arr[i], i);
    if (isGreated) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
let arr = [0, 10, 20, 30];
let fn = function greaterThan10(n) {
  return n > 10;
};
console.log(filter(arr, fn));
