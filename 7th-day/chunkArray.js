let arr = [1, 2, 3, 4, 5];
let size = 3;
function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
chunk(arr, size);
