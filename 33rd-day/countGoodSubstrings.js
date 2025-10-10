/* function countGoodSubstrings(s) {
  let arr = [];
  for (let i = 0; i < s.length - 2; i++) {
    arr.push(s.slice(i, i + 3));
  }
  let goodStringCount = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (j < 2) {
        if (arr[i][j] != arr[i][j + 1]) {
          count++;
        }
      } else {
        if (arr[i][j - 2] != arr[i][j]) {
          count++;
        }
      }
    }
    if (count === 3) {
      goodStringCount++;
      count = 0;
    } else {
      count = 0;
    }
  }
  return goodStringCount;
}
let s = "xyzzaz";
console.log(countGoodSubstrings(s));
 */

/* function countGoodSubstrings(s) {
  let count = 0;
  for (let i = 0; i < s.length - 2; i++) {
    let str = s.slice(i, i + 3);
    let arr = str.split("").reduce((acc, curr) => {
      if (!acc.includes(curr)) {
        acc.push(curr);
      }
      return acc;
    }, []);
    if (arr.length === 3) {
      count++;
    }
  }
  return count;
}
let s = "xyzzaz";
console.log(countGoodSubstrings(s)); */

function countGoodSubstrings(s) {
  let count = 0;
  for (let i = 0; i < s.length - 2; i++) {
    let str = s.slice(i, i + 3);
    let arr = new Set(str);
    if (arr.size === 3) {
      count++;
    }
  }
  return count;
}
let s = "xyzzaz";
console.log(countGoodSubstrings(s));
