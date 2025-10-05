/* function getHint(secret, guess) {
  let bullArr = [];
  let cowArr = [];
  for (let i = 0; i < secret.length; i++) {
    for (let j = 0; j < guess.length; j++) {
      if (secret[i] === guess[j]) {
        if (i === j) {
          if (!bullArr.includes(secret[i])) {
            bullArr.push(secret[i]);
          } else {
            continue;
          }
        } else {
          if (!cowArr.includes(secret[i]) && bullArr.includes(secret[i])) {
            cowArr.push(secret[i]);
          } else {
            continue;
          }
        }
      }
    }
  }
  return `${bullArr.length}A${cowArr.length}B`;
}
let secret = "11";
let guess = "01";
console.log(getHint(secret, guess)); */

/* chatgpt ans */

function getHint(secret, guess) {
  let bulls = 0;
  let cows = 0;
  let secretCount = {};
  let guessCount = {};

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      secretCount[secret[i]] = (secretCount[secret[i]] || 0) + 1;
      guessCount[guess[i]] = (guessCount[guess[i]] || 0) + 1;
    }
  }

  for (let digit in secretCount) {
    if (guessCount[digit]) {
      cows += Math.min(secretCount[digit], guessCount[digit]);
    }
  }

  return `${bulls}A${cows}B`;
}

let secret = "11";
let guess = "01";
console.log(getHint(secret, guess));
