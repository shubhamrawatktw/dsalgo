// subArray with given sum

const arr = [1,4,20,3,10,5]
const target = 33
let isTarget = false

let start = 0
let curr = 0
for (let j = 0; j < arr.length; j++) {
    curr+= arr[j]
    
    while (target < curr) {
         curr-= arr[start]
         start++
    }
    if (curr === target) {
        isTarget = true
        console.log(start,j)
    }

}




console.log(isTarget)