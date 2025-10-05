let l1 = [9, 9, 9, 9, 9, 9, 9];
let l2 = [9, 9, 9, 9];
function addTwoNumbers(l1, l2) {
  let sum = String(Number(l1.join("")) + Number(l2.join("")));
  return sum.split("").reverse();
}
console.log(addTwoNumbers(l1, l2));
