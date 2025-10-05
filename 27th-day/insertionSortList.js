let arr = [-1, 5, 3, 4, 0];
let head = {
  value: arr[0],
  next: null,
};
let size = 1;
let tail = head;
for (let i = 1; i < arr.length; i++) {
  let newNode = {
    value: arr[i],
    next: null,
  };
  tail.next = newNode;
  tail = newNode;
  size++;
}

/* function insertionSortList() {
  let current = head;
  while (current.next !== null) {
    let currentNext = current.next;
    while (currentNext !== null) {
      if (current.value > currentNext.value) {
        [current.value, currentNext.value] = [currentNext.value, current.value];
      }
      currentNext = currentNext.next;
    }
    current = current.next;
  }
  return head;
} */
/* console.log(JSON.stringify(insertionSortList())); */
function traverse() {
  let current = 0;
  let currentNode = head;
  while (current < size) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
    current++;
  }
}

function searchNode(data) {
  let counter = 1;
  let found = false;
  let currentNode = head;
  while (counter <= size) {
    if (currentNode.value == data) {
      console.log("Found");
      console.log(counter);
      found = true;
      break;
    } else {
      currentNode = currentNode.next;
      counter++;
    }
  }
  if (found === false) {
    console.log("Didn't found");
  }
}

function replaceNode(nodeIndex, data) {
  let counter = 1;
  let currentNode = head;
  while (counter <= size) {
    if (counter === nodeIndex) {
      currentNode.value = data;
    }
    currentNode = currentNode?.next;
    counter++;
  }
}

/* console.log(JSON.stringify(head));
console.log(size); */
/* traverse(); */
/* searchNode(2); */
replaceNode(2, 10);
console.log(JSON.stringify(head));
