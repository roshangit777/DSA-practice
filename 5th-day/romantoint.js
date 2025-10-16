const romanNo = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romantoIng() {
  let str = "MCMXCIV";
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    let getVal = Object.keys(romanNo).filter((ele) => ele == str[i]);
    console.log(getVal);

    sum += romanNo[getVal[0]];
  }
  console.log(sum);
}
romantoIng();
