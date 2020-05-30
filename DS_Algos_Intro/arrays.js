class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return console.log(lastItem);
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push(10);
newArray.push(12);
newArray.push(15);
newArray.push(150);
newArray.delete(2);
console.log(newArray);

// !reverse a string
function reverseString(string) {
  if (!string || string.length < 2 || typeof string !== "string") {
    return "Check your Input. It should be string literal...";
  }
  let reversed = "";
  for (let i = 0; i < string.length; i++) {
    reversed += string[string.length - i - 1];
  }
  return reversed;
}

console.log(reverseString("hsire"));

const reverse = str => [...str].reverse().join("");

console.log(reverse("hello"));

// Merge Sorted Arrays
function mergeSortedArrays(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

console.log(mergeSortedArrays([1, 3, 4], [0, 2, 6]));

function mergeSOrtedArraysAlter(array1, array2) {
  if (!array1.length || !array2.length) {
    return "You provided empty arrays or just one of them. Do Check...";
  }
  const mergedArray = [];
  let arrayItem1 = array1[0];
  let arrayItem2 = array2[0];
  let i = 1,
    j = 1;
  while (arrayItem1 || arrayItem2) {
    if (arrayItem1 < arrayItem2 || !arrayItem2) {
      mergedArray.push(arrayItem1);
      arrayItem1 = array1[i];
      i++;
    } else {
      mergedArray.push(arrayItem2);
      arrayItem2 = array2[j];
      j++;
    }
  }
  return mergedArray;
}

console.log(mergeSOrtedArraysAlter([1, 3, 4, 10, 12], [2, 5, 6]));
