let s = "anagram";
let t = "nagaram";

function isAnagram(s, t) {
  return s.split("").sort().join("") == t.split("").sort().join("")
    ? true
    : false;
}

isAnagram(s, t);
