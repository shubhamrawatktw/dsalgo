const arr = [2,3,10,6,4,8,1]

let minValue = arr[0]

let maxDiff = arr[1] - arr[0]

for (let j = 1; j < arr.length; j++) {
    
    maxDiff = Math.max(maxDiff,arr[j] - minValue)
    minValue = Math.min(minValue,arr[j])
    
}

console.log(maxDiff)