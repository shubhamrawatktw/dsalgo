// bubble sort => O(n)2

// Selection Sort O(n)2

// find smallest than put it in new array

// swap - [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

const arr = [10, 5, 8, 20, 2, 18];

for (let i = 0; i < arr.length; i++) {
  let minIndex = i
  for (let j = i + 1; j < arr.length; j++) {

    if (arr[j] < arr[minIndex]) {
      minIndex = j
    }
  }

  [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];

}

console.log(arr)
