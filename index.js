// maximum sum subaraay

const sum = (a,start,end) => {
    const pika = a.slice(start,end)
    const value = pika.reduce((acc,item) => {
          acc+=item
           return acc
    },0)

    return value
}

const arr = [-6,-1,-8]

let res = Math.max(...arr)

for (let i = 0; i < arr.length; i++) {
   
for (let j = i+1; j < arr.length; j++) {
   
    const maxSum = sum(arr,i,j+1)
    res = Math.max(res,maxSum)
    
}
     
    
}



console.log(res)
