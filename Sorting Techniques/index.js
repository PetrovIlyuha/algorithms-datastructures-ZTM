const unsortedArray = [60, 50, 40, 24, 32, 5787, 4352, 123, 91, 105, 2345, 230];

/**
 * Bubble Sort
 * @param {`*`} inputArr: number[]
 */
function bubbleSort(inputArr) {
  const length = inputArr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        let temp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = temp;
      }
    }
  }
  return inputArr;
}
/**
 *  Insertion Sort
 * @param {*} inputArr: number[]
 */
function selectionSort(inputArr) {
  for (let i = 0; i < inputArr.length; i++) {
    let minIndex = i;
    let temp = inputArr[i];
    for (let j = i + 1; j < inputArr.length; j++) {
      if (inputArr[j] < inputArr[minIndex]) {
        minIndex = j;
      }
    }
    inputArr[i] = inputArr[minIndex];
    inputArr[minIndex] = temp;
  }
  return inputArr;
}

/**
 * Insertion Sort
 * @param {*} inputArr: number[] [30,20,10,5,100,12]
 */
function insertionSort(inputArr) {
  const length = inputArr.length;
  for (let i = 0; i < length; i++) {
    if (inputArr[i] < inputArr[0]) {
      inputArr.unshift(inputArr.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (inputArr[i] > inputArr[j - 1] && inputArr[i] < inputArr[j]) {
          inputArr.splice(j, 0, inputArr.splice(i, 1)[0]);
        }
      }
    }
  }
  return inputArr;
}

console.log(insertionSort([30, 20, 10, 5, 100, 12]));

function mergeSort(inputArr) {
  if (inputArr.length === 1) {
    return inputArr;
  }
  const length = inputArr.length;
  const middle = Math.floor(length / 2);
  const left = inputArr.slice(0, middle);
  const right = inputArr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

/**
 * Merge Sort
 * @param {*} left: number[]
 * @param {*} right: number[]
 */
function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}
