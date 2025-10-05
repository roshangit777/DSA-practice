/* let prices = [3, 2, 6, 5, 0, 3];
function maxProfit(prices) {
  if (prices.length === 1 || prices.length === 0) {
    return 0;
  } else {
    let arr = [...prices];
    let newArr = prices.splice(0, prices.length - 1);
    let buy = Math.min(...newArr);
    let ind = newArr.indexOf(buy);
    let getNewArr = arr.splice(ind + 1, arr.length);
    let sell = Math.max(...getNewArr);
    let profit = sell - buy;
    return profit <= 0 ? 0 : profit;
  }
}
console.log(maxProfit(prices));
 */

let prices = [7, 6, 4, 3, 1];
function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    console.log(minPrice);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;
}

maxProfit(prices);
