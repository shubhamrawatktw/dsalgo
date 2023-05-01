// Quick sort --> lomuto partiotion
function iPartition(arr, l, h)
{   
    let pivot=arr[h];
    let i=l-1;
    for(let j=l;j<=h-1;j++){
        if(arr[j]<pivot){
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i+1], arr[h]] = [arr[h], arr[i+1]];
    return i+1;
}

function qSort(arr, l, h) {
    if(l<h){
        let p=iPartition(arr,l,h);
        arr = qSort(arr,l,p-1);
        arr = qSort(arr,p+1,h);
    }
    return arr;
}
 
let arr = [8,4,7,9,3,10,5];

let n = arr.length;

arr = qSort(arr,0,n-1);
console.log(arr);