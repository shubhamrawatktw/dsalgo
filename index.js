const arr = [5,0,6,2,3]

let res = 0

const leftMax = []
const rightMax = []

leftMax[0] = arr[0]
for (let i = 1; i < arr.length; i++) {
    
    leftMax[i] = Math.max(arr[i],leftMax[i-1])
    // console.log(arr[i],leftMax[i-1])
}

rightMax[arr.length-1] = arr[arr.length-1]

for (let i = arr.length-2; i >=0; i--) {
    rightMax[i]  = Math.max(arr[i],rightMax[i+1])
    
}


for (let i = 1; i < arr.length-1; i++) {
    res = res + (Math.min(leftMax[i],rightMax[i])-arr[i])
    
}

console.log(res)


