const nums = [1,2,3,4,5,6]

const bs = (arr,target,start,end) => {

  if (start > end) {
    return -1
  }

let middle = Math.floor((start + end)/2)

if (arr[middle] === target) {
  return middle
}

if (arr[middle] > target) {
  return bs(arr,target,start,middle-1)
}

return bs(arr,target,middle+1,end)

}

const ans = bs(nums,6,0,nums.length-1)
console.log('====================================');
console.log(ans);
console.log('====================================');

