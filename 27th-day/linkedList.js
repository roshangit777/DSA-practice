/* class List {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
  }
  addNode(data) {
    let newNode = {
      value: data,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
  }
}
let list = new List(100);
list.addNode(200);
console.log(list); */

let arr = [1, 2, 3, 4, 5];
let head = {
  value: arr[0],
  next: null,
};
let tail = head;
for (let i = 1; i < arr.length; i++) {
  let newNode = {
    value: arr[i],
    next: null,
  };
  tail.next = newNode;
  tail = newNode;
}
console.log(JSON.stringify(head));
