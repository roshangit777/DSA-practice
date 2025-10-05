let num = [3, 0, 1];
function missingNumber(num) {
  let sortedArr = num.sort();
  console.log(sortedArr);
  let newArr = Array.from({ length: num.length + 1 }, (_, i) => i);
  let found = newArr.filter((item) => !sortedArr.includes(item));
  return found.join("");
}
console.log(missingNumber(num));
