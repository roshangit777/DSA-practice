/* let init = 5;
let calls = ["increment", "reset", "decrement"];

const createCounter = (int) => {
  function increment() {
    return int + 1;
  }
  function reset() {
    return int;
  }
  function decrement() {
    return int - 1;
  }
  return [increment(), reset(), decrement()];
};

console.log(createCounter(init));
 */

function createCounter(init) {
  let currentVal = init;
  let resetVal = currentVal;
  return {
    increment: () => {
      currentVal = currentVal + 1;
      return currentVal;
    },
    reset: () => {
      currentVal = resetVal;
      return currentVal;
    },
    decrement: () => {
      currentVal = currentVal - 1;
      return currentVal;
    },
  };
}
const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
