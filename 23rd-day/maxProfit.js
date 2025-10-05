let prices = [7, 6, 4, 3, 1];
function maxProfit() {
  let buy = Math.min(...prices);
  let newStocs = prices.slice(prices.indexOf(buy), prices.length);
  let sell = Math.max(...newStocs);
  return sell - buy;
}
console.log(maxProfit());
