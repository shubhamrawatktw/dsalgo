const arr = [30,10,8,2]
let maxDiff = Number.NEGATIVE_INFINITY
for (let i = 0; i < arr.length; i++) {
   
    for (let j = i+1; j < arr.length; j++) {
      let currDiff = arr[j] - arr[i]
      if (currDiff > maxDiff) {
        maxDiff = currDiff
      }
        
    }
    
}

console.log(maxDiff)