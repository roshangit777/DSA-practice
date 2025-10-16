async function sleep(millis) {
  let data = await new Promise((resolve) =>
    setTimeout(() => {
      let data = new Date();
      resolve(data.getMonth());
    }, millis)
  );
  return data;
}
let millis = 100;
console.log(sleep(millis).then(console.log));
