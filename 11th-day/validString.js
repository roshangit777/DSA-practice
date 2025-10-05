let s = "([])";
function isValid(s) {
  let obj = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
  };
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
        obj.a++;
        break;
      case ")":
        obj.b++;
        break;
      case "{":
        obj.c++;
        break;
      case "}":
        obj.d++;
        break;
      case "[":
        obj.e++;
        break;
      case "]":
        obj.f++;
        break;
      default:
        return false;
    }
  }
  if (obj.a === obj.b && obj.c === obj.d && obj.e === obj.f) {
    return true;
  } else {
    return false;
  }
}
console.log(isValid(s));
