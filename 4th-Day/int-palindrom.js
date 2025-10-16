let x = 123;
function palidrome(x) {
  let arr = String(x);
  let revString = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revString += arr[i];
  }
  let res = parseInt(revString.toString());
  if (res === x) {
    return true;
  } else {
    return false;
  }
}
let ret = palidrome(x);
