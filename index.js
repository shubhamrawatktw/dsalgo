// Union of two sorted array 

const a = [3,5,8]
const b = [2,8,9,10,15]
const res = []
const finalRes =[]
let i =0
let j =0
let k = 0

while (i < a.length && j < b.length) {
   
  if (b[j] < a[i] ) {
    res[k] = b[j]
    j++
    k++
  }else{
    res[k] = a[i]
    i++
    k++
  }
}

while (i < a.length) {
  res[k] = a[i]
  i++
  k++
}

while (j < b.length) {
  res[k] = b[j]
  j++
  k++
}

for (let i = 0; i < res.length; i++) {
 if (res[i] !== res[i+1]) {
    finalRes.push(res[i])
 }
  
}

console.log(finalRes)
