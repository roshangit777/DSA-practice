const arr = [1, 2, 3, 4, 5, 7];

function missingNo() {
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      return "none found";
    }
    if (arr[i + 1] !== arr[i] + 1) {
      return arr[i] + 1;
    }
  }
}

console.log(missingNo());
console.log(arr.length);
