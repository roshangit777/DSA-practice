function nextGreatestLetter(letters, target) {
  for (let i = 0; i < letters.length; i++) {
    if (target < letters[i]) {
      return letters[i];
    }
  }
  return letters[0];
}
let letters = ["c", "f", "j"];
let target = "a";
console.log(nextGreatestLetter(letters, target));
