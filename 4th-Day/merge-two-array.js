let list1 = [1, 2, 4];
let list2 = [1, 3, 4];
let size = list2.length;

function mergeTwoLists(list1, list2) {
  if (!Array.isArray(list1) || !Array.isArray(list2)) {
    return;
  }

  for (let i = 0; i < size; i++) {
    list1.push(list2[i]);
  }
  for (let i = 0; i < list1.length; i++) {
    for (let j = 1; j < list1.length; j++) {
      if (list1[j] < list1[j - 1]) {
        [list1[j - 1], list1[j]] = [list1[j], list1[j - 1]];
      }
    }
  }

  return list1;
}

let ret = mergeTwoLists(list1, list2);
