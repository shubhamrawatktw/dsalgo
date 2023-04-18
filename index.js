const reverse = (n,start,end) => {

if (start >= end) {
   return
}

let temp = n[start]
n[start] = n[end]
n[end] = temp

// console.log(n)
 reverse(n,start+1,end-1)
return n
}

let val = Array.from("12345")
const ans =reverse(val,0,val.length-1)

console.log('====================================');
console.log(ans.join(""));
console.log('====================================');