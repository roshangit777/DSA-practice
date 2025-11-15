function mergeSimilarItems(items1, items2) {
  if (items1.length > items2.length) {
    return main(items1, items2);
  } else {
    return main(items2, items1);
  }
  function main(a, b) {
    let newArr = [];
    for (let i = 0; i < b.length; i++) {
      for (let j = 0; j < b[i].length; j++) {
        newArr[newArr.length] = b[i][j];
      }
    }
    for (let k = 0; k < newArr.length; k += 2) {
      for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j += 2) {
          if (newArr[k] === a[i][j]) {
            a[i][j + 1] = a[i][j + 1] + newArr[k + 1];
          }
        }
      }
    }
    for (let i = 0; i < a.length - 1; i++) {
      for (let j = 0; j < a[i].length; j += 2) {
        if (a[i][j] > a[i + 1][j]) {
          [a[i][j], a[i + 1][j]] = [a[i + 1][j], a[i][j]];
        }
      }
    }
    return a;
  }
}
let items1 = [
  [1, 1],
  [4, 5],
  [3, 8],
];
let items2 = [
  [3, 1],
  [1, 5],
];
console.log(mergeSimilarItems(items1, items2));
