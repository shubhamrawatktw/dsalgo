const arr = [7,10,4,3,6,5,2]

const leaders = []

for (let i = 0; i < arr.length; i++) {
   let isLeader = true
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i] < arr[j] ) {
            isLeader = false
        }
    }

    if (isLeader) {
        leaders.push(arr[i])
    }
}

console.log(leaders)
