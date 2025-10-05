const s = "abcacabbcc";
function repeatedSubstringPattern(s) {
  const len = s.length;

  for (let i = 1; i <= len / 2; i++) {
    if (len % i === 0) {
      const substring = s.slice(0, i);
      const repeated = substring.repeat(len / i);
      if (repeated === s) {
        return true;
      }
    }
  }

  return false;
}
console.log(repeatedSubstringPattern(s));
