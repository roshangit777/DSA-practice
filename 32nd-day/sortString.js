function sortString(s) {
  let obj = s.split("").reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  let countSomething = Math.max(...Object.values(obj));
  if (countSomething === 1) {
    let str = Object.keys(obj);
    for (let i = 0; i < str.length - 1; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] > str[j]) {
          [str[i], str[j]] = [str[j], str[i]];
        }
      }
    }
    return str.join("");
  } else {
    let accArr = Object.keys(obj);
    let dscArr = Object.keys(obj);
    for (let i = 0; i < accArr.length - 1; i++) {
      for (let j = i + 1; j < accArr.length; j++) {
        if (accArr[i] > accArr[j]) {
          [accArr[i], accArr[j]] = [accArr[j], accArr[i]];
        }
      }
    }
    for (let i = 0; i < dscArr.length - 1; i++) {
      for (let j = i + 1; j < dscArr.length; j++) {
        if (dscArr[i] < dscArr[j]) {
          [dscArr[i], dscArr[j]] = [dscArr[j], dscArr[i]];
        }
      }
    }
    let toggole = true;
    let newStr = "";
    for (let i = 1; i <= countSomething; i++) {
      if (toggole) {
        newStr += accArr.join("");
        toggole = false;
      } else {
        newStr += dscArr.join("");
        toggole = true;
      }
    }
    return newStr;
  }
}
let s = "aaaabbbbcccc";
console.log(sortString(s));
