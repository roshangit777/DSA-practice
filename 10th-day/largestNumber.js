let nums = [3, 30, 34, 5, 9];

function largestNumber() {
  let newArray = nums
    .sort((a, b) => {
      const strA = a.toString();
      const strB = b.toString();
    })
    .reverse();

  let result = newArray.join("");

  return result[0] === "0" ? "0" : result;
}

console.log(largestNumber());
