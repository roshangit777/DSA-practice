let g = [1, 2];
let s = [1, 2, 3];
let count = 0;
function findContentChildren(g, s) {
  for (let i = 0; i < g.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (g[i] === s[j]) {
        count++;
        break;
      }
    }
  }
  return count;
}
console.log(findContentChildren(g, s));
