function rankTeams(votes) {
  let obj = votes.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  let found = Math.max(...Object.values(obj));
  if (found === 0) return "";
  if (found === 1) return votes[0];
  return Object.keys(obj).find((item) => obj[item] === found);
}
let votes = ["ABC", "ACB", "ABC", "ACB", "ACB"];
console.log(rankTeams(votes));
