let obj = { a: 2 };
function isEmpty(obj) {
  return Object.keys(obj).length === 0 ? true : false;
}
isEmpty(obj);
