const a = [3,43,6,4,8,9,2]

const linear = (arr,target,start) => {


  if (start === arr.length) {
    return -1
  }

  if (arr[start] === target) {
    return start
  }

   return linear(arr,target,start+1)
}

const ans = linear(a,3,0)

console.log('====================================');
console.log(ans);
console.log('====================================');