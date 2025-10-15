function isPrefixOfWord(sentence, searchWord) {
  let arr = sentence.split(" ");
  let foundIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    if (searchWord == arr[i].slice(0, searchWord.length)) {
      return i + 1;
    }
  }
  return foundIndex;
}
let sentence = "i love eating burger";
let searchWord = "burg";
console.log(isPrefixOfWord(sentence, searchWord));
