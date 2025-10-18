/* function minimumBoxes(apple, capacity) {
  let appleCount = apple.reduce((a, b) => a + b, 0);
  let count = 0;
  function countBox() {
    let found = false;
    for (let i = 0; i < capacity.length - count; i++) {
      let ele = capacity.slice(i, i + 1 + count);
      let sum = ele.reduce((a, b) => a + b, 0);
      if (sum >= appleCount) {
        found = true;
        return ele.length;
      }
    }
    if (!found) {
      count++;
      return countBox();
    }
  }
  let boxCount = countBox();
  return boxCount;
}
let apple = [5, 5, 5];
let capacity = [2, 4, 2, 7];
console.log(minimumBoxes(apple, capacity)); */
function minimumBoxes(apple, capacity) {
  let appleCount = apple.reduce((a, b) => a + b, 0);
  let arr = capacity.sort((a, b) => a - b);
  let sum = 0;
  let count = 0;
  for (let i = capacity.length - 1; i >= 0; i--) {
    sum += arr[i];
    count++;
    if (sum >= appleCount) {
      return count;
    }
  }
}
let apple = [5, 5, 5];
let capacity = [2, 4, 2, 7];
console.log(minimumBoxes(apple, capacity));
