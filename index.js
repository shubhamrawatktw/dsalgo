const arr = [1,5,3,8,12]

let profit = 0

for (let i = 0; i < arr.length; i++) {
   
    if (arr[i+1] > arr[i]) {
        profit += arr[i+1] - arr[i]
    }
    
}

console.log(profit)