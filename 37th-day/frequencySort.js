function frequencySort(nums) {
  let obj = nums.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  let firstCounts = Object.values(obj).sort((a, b) => a - b);
  let newObj = firstCounts.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  let secondCounts = Object.keys(newObj).sort((a, b) => a - b);
  let newArr = [];
  for (let i = 0; i < secondCounts.length; i++) {
    let arr = [];
    for (let key in obj) {
      if (obj[key] === Number(secondCounts[i])) {
        arr[arr.length] = key;
      }
    }

    let descArr = arr.sort((a, b) => b - a);
    for (let j = 0; j < descArr.length; j++) {
      let value = obj[descArr[j]];
      for (let k = 1; k <= value; k++) {
        newArr[newArr.length] = Number(descArr[j]);
      }
    }
  }
  return newArr;
}
let nums = [-1, 1, -6, 4, 5, -6, 1, 4, 1];
console.log(frequencySort(nums));
