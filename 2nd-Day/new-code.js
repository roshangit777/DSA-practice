let s = "a good   life";
function reverseWords(param_1) {
  let words = param_1.split(" ").filter((word) => word.trim() !== "");

  let reversedWords = words.reverse();

  return reversedWords.join(" ");
}

console.log(reverseWords("a good   example")); // Output: "example good a"
console.log(reverseWords("  hello world  ")); // Output: "world hello"
console.log(reverseWords("the sky is blue")); // Output: "blue is sky the"
