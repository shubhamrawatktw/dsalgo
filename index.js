// bubble sort => O(n)2

const arr = [10, 8, 20, 5];

for (let i = 0; i < arr.length - 1; i++) {
  let isSwapped = false
  for (let j = 0; j < arr.length -i- 1; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      isSwapped= true
    }
  }

  if (!isSwapped) {
      break
  }
}

console.log(arr)
