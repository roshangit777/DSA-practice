function distributeCandies(candyType) {
  let obj = candyType.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  let typesOfCandy = Object.keys(obj).length;
  let candies = candyType.length / 2;
  if (typesOfCandy > candies) {
    return candies;
  } else {
    return typesOfCandy;
  }
}
let candyType = [6, 6, 6, 6];
console.log(distributeCandies(candyType));
