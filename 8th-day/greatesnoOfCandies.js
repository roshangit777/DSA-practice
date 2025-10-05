let candies = [2, 3, 5, 1, 3];
let extraCandies = 3;
function kidsWithCandies(candies, extraCandies) {
  let maxCnadies = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    candies[i] = candies[i] + extraCandies >= maxCnadies ? true : false;
  }
  return candies;
}
console.log(kidsWithCandies(candies, extraCandies));
