let columnNumber = 2147483647;
let result = "";
function convertToTitle(columnNumber) {
  while (columnNumber > 0) {
    columnNumber--;
    let char = String.fromCharCode(Math.floor((columnNumber % 26) + 65));
    result = char + result;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return result;
}
console.log(convertToTitle(columnNumber));
