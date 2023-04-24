// Insertion Sort
// best case = o(n)
// worst case = o(n)2

const arr = [20, 5, 40, 60, 10, 30];

for (let i = 1; i < arr.length; i++) {
  const key = arr[i];
   let j = i-1
   while (j>=0 && arr[j] > key) {
    arr[j+1] = arr[j]
    j--
   }

   arr[j+1] = key
}

console.log(arr);
