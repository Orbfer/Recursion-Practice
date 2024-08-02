function fibs(lengthOfArr) {
  let fibArr = [];
  for (let i = 0; i < lengthOfArr; i++) {
    if (i == 0 || i == 1) {
      fibArr.push(i);
    } else {
      fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }
  }
}
let fibArr = [];
function fibsRec(num) {
  if (num == 0) {
    fibArr[0] = 0;
    return 0;
  } else if (num == 1) {
    fibArr[1] = 1;
    return 1;
  } else if (fibArr.length > num) {
    return fibArr[num];
  } else {
    let newFibNum = fibsRec(num - 1) + fibsRec(num - 2);
    fibArr[num] = newFibNum;
    return newFibNum;
  }
}
function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const halfLength = Math.floor(array.length / 2);
  const firstHalf = array.slice(0, halfLength);
  const secondHalf = array.slice(halfLength);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(leftArray, rightArray) {
  let resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      resultArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }
  return resultArray
    .concat(leftArray.slice(leftIndex))
    .concat(rightArray.slice(rightIndex));
}
