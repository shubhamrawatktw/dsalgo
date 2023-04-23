// binary search with sorted array
const a = [10, 20, 30, 40, 50, 60];
const tar= 50;

const bs = (arr, target) => {
  let index = -1;
  let start = 0;
  let end = arr.length - 1;
  
//   console.log(start,end,"mid")
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      index = mid;
      break
    }

    if (target > arr[mid]) {
      start = mid+1;
    }

    if (target < arr[mid]) {
      end = mid-1;
    }
  }

  return index;
};

console.log(bs(a, tar));
