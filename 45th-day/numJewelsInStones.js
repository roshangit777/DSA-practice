/* function numJewelsInStones(jewels, stones) {
  let count = 0;
  let obj = stones.split("").reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  for (let key in obj) {
    if (jewels.includes(key)) {
      count += obj[key];
      jewels = jewels.replace(key, "");
    }
  }

  return count;
} */

function numJewelsInStones(jewels, stones) {
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      if (jewels[i] === stones[j]) {
        count++;
      }
    }
  }
  return count;
}

let jewels = "aA";
let stones = "aAAbbbb";
console.log(numJewelsInStones(jewels, stones));
