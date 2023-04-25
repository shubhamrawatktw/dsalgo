// merge sort

const a = [2, 4, 8];
const b = [5, 6, 12, 16];

const merge = (arr1, arr2) => {
  const res = [];
  let i = 0;
  let j = 0;
  let k =0
  while (i < arr1.length && j < arr2.length) {
     if (arr1[i] < arr2[j]) {
        res[k] = arr1[i]
        i++
     }else{
      res[k] = arr2[j]
      j++
     }
     k++
  }

  while (i<arr1.length) {
    res[k] = arr1[i]
    i++
    k++
  }
  while (j<arr2.length) {
    res[k] = arr2[j]
    j++
    k++
  }

//  console.log(res)
  return res;
};
// merge([8],[3,4])
const mergeSort = (arr) => {
  if (arr.length === 1) {
     return arr
  }
    let mid = Math.floor(arr.length/2)
    const a = mergeSort([...arr].slice(0,mid))
    const b =mergeSort([...arr].slice(mid,arr.length))
    return merge(a,b)

}
const ap = [8,3,4,12,5,6]
const ans = mergeSort(ap,0,ap.length-1)
console.log(ans)
