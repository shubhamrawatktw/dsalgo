// Intersection of two sorted arrays

const a = [3,5,10,10,10,10,15,15,20]
const b = [5,10,10,15,30]
const ans =[]
let i = 0
let j = 0
let k = 0

while (i < a.length && j<b.length) {
  console.log("shubham")
  if (a[i] === b[j]) {
    ans[k] = a[i]
    i++,
    j++,
    k++
  }
  if(b[j] > a[i]){
    i++
  }
  if (a[i] > b[j]) {
    j++
  }
}

const sorted =[]

for (let i = 0; i < ans.length; i++) {
  const element = ans[i];
  if (element !== ans[i+1]) {
    sorted.push(element)
  }
  
}
console.log(sorted)