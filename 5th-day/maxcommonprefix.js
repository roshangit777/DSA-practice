let s = ["flower", "flow", "flight"];

function per() {
  let first = s[0];
  let sec = s[1];
  let third = s[2];
  let count = 1;
  if (first.includes("fl")) {
    count++;
  } else if (sec.includes("fl")) {
    count++;
  } else if (third.includes("fl")) {
    count++;
  }
  return count;
}
console.log(per());
