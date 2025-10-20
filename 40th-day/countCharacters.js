function countCharacters(words, chars) {
  let countCharacter = 0;
  for (let i = 0; i < words.length; i++) {
    let count = 0;
    for (let j = 0; j < words[i].length; j++) {
      if (chars.includes(words[i][j])) {
        count++;
      } else {
        count = 0;
        break;
      }
    }
    countCharacter += count;
  }
  return countCharacter;
}
let words = [
  /* "dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin",
  "ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb",
  "ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl", */
  "boygirdlggnh",
  /*"xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx",
  "nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop",
  "hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx",
  "juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr",
  "lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo",
  "oxgaskztzroxuntiwlfyufddl",
  "tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp",
  "qnagrpfzlyrouolqquytwnwnsqnmuzphne",
  "eeilfdaookieawrrbvtnqfzcricvhpiv",
  "sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz",
  "yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue",
  "hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv",
  "cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo",
  "teyygdmmyadppuopvqdodaczob",
  "qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs",
  "qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs", */
];
let chars = "usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp";
console.log(countCharacters(words, chars));
