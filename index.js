const a = [1,2,3,4,5,12]

const isSorted = (arr) => {
  let flag = true


  arr.map((item,idx) => {
    if (arr[idx] > arr[idx+1] ) {
      flag = false
    }
  })

return flag
}

const ans = isSorted(a)
console.log('====================================');
console.log(ans);
console.log('====================================');