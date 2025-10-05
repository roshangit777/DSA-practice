let ransomNote = "aa";
let magazine = "aab";
function canConstruct(ransomNote, magazine) {
  let ransomNoteArr = ransomNote.split("");
  let magazineArr = magazine.split("");
  for (let i = 0; i <= ransomNoteArr.length; i++) {
    for (let j = 0; j <= magazineArr.length; j++) {
      if (ransomNoteArr[i] === magazineArr[j]) {
        ransomNoteArr.splice(i, 1);
        magazineArr.splice(j, 1);
        break;
      }
    }
  }
  if (ransomNoteArr.length > 0) {
    return false;
  } else {
    return true;
  }
}
console.log(canConstruct(ransomNote, magazine));
