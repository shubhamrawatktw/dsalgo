const arr = [7,10,4,3,6,5,2]

const leaders = []
let currLeader = arr[arr.length-1]
leaders[0] = arr[arr.length-1]
for (let i = arr.length-2; i >= 0; i--) {
   
    if (arr[i] > currLeader) {
        currLeader = arr[i]
        leaders.push(arr[i])
    }
    
}

console.log(leaders)
