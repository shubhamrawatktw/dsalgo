// Lomuto partition

const arr = [10,80,30,90,40,50,70]

const pivot = arr[arr.length-1]

let i = -1
let j = 0

while (j< arr.length-1) {
  
  if (arr[j] < pivot) {
    i++
    [arr[i],arr[j]] = [arr[j],arr[i]]
  }
  j++
}
[arr[i+1],arr[arr.length-1]] = [arr[arr.length-1],arr[i+1]]

console.log(arr)
