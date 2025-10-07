function removeDuplicate(responses) {
  return responses.map((item) => {
    return item.reduce((acc, curr) => {
      if (!acc.includes(curr)) acc.push(curr);
      return acc;
    }, []);
  }, []);
}

function mostCommonWordFun(obj) {
  let mostCommonWord = Object.keys(obj).reduce((a, b) =>
    obj[b] > obj[a] ? b : a
  );
  return Object.keys(obj).filter((item) => obj[item] === obj[mostCommonWord]);
}

function findCommonResponse() {
  let obj = {};
  let newArr = removeDuplicate(responses);
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      obj[newArr[i][j]] = (obj[newArr[i][j]] || 0) + 1;
    }
  }
  let myNewArr = mostCommonWordFun(obj);
  if (myNewArr.length === 1) {
    return myNewArr[0];
  } else {
    let lexicographicWord = myNewArr.reduce((acc, curr) =>
      curr < acc ? curr : acc
    );
    return lexicographicWord;
  }
}
let responses = [
  ["good", "ok", "good"],
  ["ok", "bad"],
  ["bad", "notsure"],
  ["great", "good"],
];
console.log(findCommonResponse());
