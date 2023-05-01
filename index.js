// matrix 2D Array 
const arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]

for (let i = 0; i < arr.length; i++) {
 
    if (i%2 ===0) {
        for (let j = 0; j < arr.length; j++) {
           
            console.log(arr[i][j])
        }
    }else{
     for (let k = arr.length-1; k >=0; k--) {
       
        console.log(arr[i][k])
     }
    }
    
}