function matchReplacement(s, sub, mappings) {
  for (let i = 0; i < mappings.length; i++) {
    if (sub.includes(mappings[i][0])) {
      sub = sub.replace(mappings[i][0], mappings[i][1]);
      console.log(sub);
    }
  }
  if (s.includes(sub)) {
    return true;
  } else {
    return false;
  }
}
let s = "Fool33tbaR";
let sub = "leetd";
let mappings = [
  ["e", "3"],
  ["t", "7"],
  ["t", "8"],
  ["d", "b"],
  ["p", "b"],
];
console.log(matchReplacement(s, sub, mappings));
