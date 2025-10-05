let s = "A man, a plan, a canal: Panama";

function isPalindrome(s) {
  if (s.length === 0) {
    return true;
  }
  let cleanStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let strArr = [];
  for (let i = cleanStr.length - 1; i >= 0; i--) {
    strArr.push(cleanStr[i]);
  }
  let revStr = strArr.toString().replace(/[^a-zA-Z0-9]/g, "");
  if (revStr === cleanStr) {
    return true;
  } else {
    return false;
  }
}
let ret = isPalindrome(s);
