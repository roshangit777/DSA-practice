const s = ", , , ,        a, eaefa";
function countSegments(s) {
  let newArr = s.split(" ");
  let arr = [""];
  let count = 0;
  if (s.length === 0) return 0;
  if (newArr.length === 0) {
    return 0;
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === arr[0]) {
      continue;
    }
    if (newArr[i]) {
      count++;
    }
  }
  return count;
}

console.log(countSegments(s));
