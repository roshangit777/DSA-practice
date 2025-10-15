function maxRepeating(sequence, word) {
  let count = 0;
  for (let i = 0; i < sequence.length / word.length + 2; i++) {
    if (sequence.includes(word)) {
      count++;
      sequence = sequence.replace(word, "");
    } else {
      return count;
    }
  }
  return count;
}
let sequence = "aaabaaaabaaabaaaabaaaabaaaabaaaaba";
let word = "aaaba";
console.log(maxRepeating(sequence, word));
