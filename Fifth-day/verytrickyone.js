function map(arr, fn) {
  const result = []; // Initialize an empty array to store the results

  // Loop through each element of the array
  for (let i = 0; i < arr.length; i++) {
    // Apply the function `fn` to each element along with its index
    result.push(fn(arr[i], i));
  }

  // Return the resulting array after transformation
  return result;
}

const arr1 = [1, 2, 3];
const fn1 = function plusone(n) {
  return n + 1;
};
console.log(map(arr1, fn1)); // [2, 3, 4]

const arr2 = [1, 2, 3];
const fn2 = function plusI(n, i) {
  return n + i;
};
console.log(map(arr2, fn2)); // [1, 3, 5]

const arr3 = [10, 20, 30];
const fn3 = function constant() {
  return 42;
};
console.log(map(arr3, fn3)); // [42, 42, 42]
