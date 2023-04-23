// majority elements

const arr = [8,3,4,8,8]
const majorityNum = Math.floor(arr.length /2)
const obj = {}

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (!obj[element]) {
        obj[element] = 1
    }
    else{
        obj[element] = obj[element]+1
    }
    
}

const ans =Object.entries(obj).map((item) => {
    const [key,value] = item
 
    if (value > majorityNum) {
     return key
    }
}).filter(el => Boolean(el))

// console.log(ans)

const index = arr.indexOf(parseInt(ans[0]))
console.log(index)