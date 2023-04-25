// merge sort 

const arr1 = [2,4,8]
const arr2 = [5,6,12,16]
const res = []
let i=0
let j=0

while (i<arr1.length || j < arr2.length) {
 if (arr1[i] < arr2[j]) {
  res.push(arr1[i])
  i++
 }
 else{
  res.push(arr2[j])
  j++
 }

}

console.log(res)