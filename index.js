// consecutive arreays

const arr = [0,0,0,0]

 let res = 0
 let tempRes = 0


 for (let i = 0; i < arr.length; i++) {
    

     if (arr[i] === 1) {
         tempRes++
     }

     if ((arr[i] === 0 || i === arr.length -1) && res<tempRes) {
         res = tempRes
         tempRes = 0
     }

 }


 console.log(res)
