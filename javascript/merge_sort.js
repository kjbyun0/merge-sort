function merge(arr1, arr2) {
  // type your code here
  // console.log("arr1: ", arr1, ", arr2: ", arr2);

  let i1 = 0, i2 = 0;
  const mArr = [];
  while (i1 < arr1.length && i2 < arr2.length) {
    if (arr1[i1] <= arr2[i2])
      mArr.push(arr1[i1++]);
    else 
      mArr.push(arr2[i2++]);
  }
  // console.log("mArr: ", mArr, ", i1: ", i1, ", i2: ", i2);

  if (i1 < arr1.length)
    mArr.push(...arr1.slice(i1));
  if (i2 < arr2.length)
    mArr.push(...arr2.slice(i2));

  return mArr;
}

function mergeSort(arr) {
  // type your code here
  if (arr.length <= 1)
    return arr;

  const midIdx = Math.ceil(arr.length / 2);
  // console.log("midIdx: ", midIdx);
  return merge(mergeSort(arr.slice(0, midIdx)), mergeSort(arr.slice(midIdx)));
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2]");
  console.log("=>", mergeSort([2, 1]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", mergeSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: [-10, 0, 2, 2, 5, 10, 20]");
  console.log("=>", mergeSort([10, -10, 0, 2, 20, 5, 2]));

  console.log("");
  console.log("Expecting: []");
  console.log("=>", mergeSort([]));

  console.log("");
  console.log("Expecting: [1]");
  console.log("=>", mergeSort([1]));

  console.log("");
  console.log("Expecting: [1, 2]");
  console.log("=>", mergeSort([1, 2]));
}

module.exports = mergeSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
