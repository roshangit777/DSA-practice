let bills = [5, 5, 5, 10, 20];
function lemonadeChange(bills) {
  let totoalAmount = 5 * bills.length;
  let maxAmout = totoalAmount * 2 - 5;
  let sum = 0;
  for (let i = 0; i < bills.length; i++) {
    sum += bills[i];
  }
  if (sum >= totoalAmount && sum < maxAmout) {
    return true;
  } else {
    return false;
  }
}
console.log(lemonadeChange(bills));
