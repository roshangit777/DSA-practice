let addTwoPromises = async function (promise1, promise2) {
  let [a, b] = await Promise.all([promise1, promise2]);
  return a + b;
};
let promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
let promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));
console.log(addTwoPromises(promise1, promise2));
