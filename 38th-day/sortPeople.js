function sortPeople(names, heights) {
  let newArr = [];
  for (let i = 0; i < heights.length; i++) {
    let maxHeight = Math.max(...heights);
    let index = heights.indexOf(maxHeight);
    newArr[newArr.length] = names[index];
    heights[index] = 0;
  }
  return newArr;
}
let names = ["Alice", "Bob", "Bob"];
let heights = [155, 185, 150];
console.log(sortPeople(names, heights));
