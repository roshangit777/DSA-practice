/* function findValidPair(s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    obj[`a${s[i]}`] = (obj[`a${s[i]}`] || 0) + 1;
  }
  let pair = Object.keys(obj).filter((item) => Number(item[1]) === obj[item]);
  if (pair.length === 1) return "";
  let str = pair.reduce((acc, curr) => (acc += curr[1]), "");
  return s.includes(str) ? str : "";
 
}
let s = "24314474";
console.log(findValidPair(s));
 */

function findValidPair(s) {
  // Step 1: frequency count using prefixed keys to avoid sorting
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    obj[`a${s[i]}`] = (obj[`a${s[i]}`] || 0) + 1;
  }

  // Step 2: loop through adjacent pairs
  for (let i = 0; i < s.length - 1; i++) {
    const a = s[i];
    const b = s[i + 1];

    // must be different digits
    if (a === b) continue;

    // check both digits meet condition: freq == numeric value
    const freqA = obj[`a${a}`];
    const freqB = obj[`a${b}`];

    if (freqA === Number(a) && freqB === Number(b)) {
      return a + b; // first valid adjacent pair
    }
  }

  return ""; // no valid pair found
}

console.log(findValidPair("1522")); // ""
