const a =[2,4,4,12]

const isSorted = (arr, start) => {
  if (start === arr.length-1) {
    return true;
  }

  if (arr[start] <= arr[start + 1]) {
    return isSorted(arr, start + 1);
  }

  return false;
};

const ans = isSorted(a, 0);
console.log("====================================");
console.log(ans);
console.log("====================================");
