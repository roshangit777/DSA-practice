//left side triangle
/* for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 0; j <= i; j++) {
    str += `*`;
  }
  console.log(str);
} */

//center triangle

/* let n = 50;
for (let i = 0; i < n; i++) {
  let str = "";

  for (let k = 0; k < n - i; k++) {
    str += " ";
  }
  for (let j = 0; j <= i; j++) {
    str += "* ";
  }
  console.log(str);
} */

// right-side triangle

/* let n = 50;
for (let i = 0; i < n; i++) {
  let str = "";

  for (let k = 0; k < n - i; k++) {
    str += " ";
  }
  for (let j = 0; j <= i; j++) {
    str += "*";
  }
  console.log(str);
} */

/* let str = "hello"; */
// left to right
/* for (let i = 0; i < str.length; i++) {
  let newStr = "";
  for (let j = 0; j < str.length - (str.length - i); j++) {
    newStr += "  ";
  }
  newStr += str[i];
  console.log(newStr);
  continue;
} */

// right to left
/* for (let i = 0; i < str.length; i++) {
  let newStr = "";
  for (let j = 0; j < str.length - i; j++) {
    newStr += "  ";
  }
  newStr += str[i];
  console.log(newStr);
  continue;
} */

//Print sting in X shape

/* let str = "hello";

for (let i = 0; i < str.length; i++) {
  let line = "";

  for (let j = 0; j < str.length; j++) {
    // when row == column → print normal char
    // when column == (length - row - 1) → print reverse char
    if (j === i) {
      line += str[i];
    } else if (j === str.length - i - 1) {
      line += str[j];
    } else {
      line += " ";
    }
  }

  console.log(line);
} */

let str = "1234567890";
for (let i = 0; i < str.length; i += 2) {
  let c = "";
  if (i === 0) {
    c += str[i];
    console.log(c);
  } else {
    c += `${str[i - 1]}`;
    for (let j = 1; j <= i; j++) {
      c += " ";
    }
    c += str[i];
    console.log(c);
  }
}
