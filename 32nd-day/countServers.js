let grid = [
  [1, 0],
  [1, 1],
  [1, 1],
];
let count = 0;
function countServers() {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length - 1; j++) {
      if (grid[i][j] && grid[i + 1]?.[j] === 1) {
        count = count + 2;
      }
    }
  }
  return count;
}
console.log(countServers());
