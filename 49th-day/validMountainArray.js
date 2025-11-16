function validMountainArray(arr) {
  if (arr.length < 3) return false;
  let asc = arr.slice(0, arr.length / 2);
  let dsc = arr.slice(arr.length / 2, arr.length);
  let isAsc = () => {
    for (let i = 0; i < asc.length - 1; i++) {
      if (asc[i] >= asc[i + 1]) {
        return false;
      }
    }
    return true;
  };
  let isDsc = () => {
    for (let i = 0; i < dsc.length - 1; i++) {
      if (dsc[i] <= dsc[i + 1]) {
        return false;
      }
    }
    return true;
  };
  if (isAsc() === false || isDsc() === false) {
    return false;
  } else {
    return true;
  }
}
let arr = [0, 1, 2, 3, 4, 8, 9, 10, 11, 12, 11];
console.log(validMountainArray(arr));
