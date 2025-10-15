let once = function (fn) {
  let called = false;
  return function (...args) {
    if (!called) {
      return { calls: 1, value: fn(...args) };
    } else {
      return undefined;
    }
  };
};
let fn = (a, b, c) => a * b * c;
let calls = [
  [5, 7, 4],
  [2, 3, 6],
  [4, 6, 8],
];
console.log(once(fn)(...calls[0]));
