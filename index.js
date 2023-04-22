// frequency in sorted Array

const arr = [10,10,10,25,30,30]
const obj = {}

for (let i = 0; i < arr.length; i++) {
   const el = arr[i]
  if (!obj[el]) {
      obj[el] = 1
  }
  else{
    obj[el] = obj[el] + 1
  }
}

Object.values(obj).map(item => {
    console.log(item)
})