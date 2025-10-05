let head = [1, 2, 2, 1];
let newHead = String(head);
function isPalindrome(head) {
  let str = head.join("");
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  if (newStr === str) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome(head));
