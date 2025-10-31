function isToeplitzMatrix(matrix) {
  let ele = matrix[0][0];
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][i] === ele) {
      arr[arr.length] = true;
    } else {
      arr[arr.length] = false;
    }
  }
  return arr.every((item) => item === true);
}
let matrix = [[18], [66]];
console.log(isToeplitzMatrix(matrix));
