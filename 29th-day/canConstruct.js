function canConstruct(ransomNote, magazine) {
  for (let i = 0; i < ransomNote.length; i++) {
    if (magazine.includes(ransomNote[i])) {
      magazine = magazine.replace(ransomNote[i], "");
    } else {
      return false;
    }
  }
  return true;
}
let ransomNote = "a";
let magazine = "b";
console.log(canConstruct(ransomNote, magazine));
