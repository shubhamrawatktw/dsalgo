// equilibrium point

const arr = [1,2,3,4,5];

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  let ls = 0;
  let rs = 0;

  for (let j = i - 1; j >= 0; j--) {
    ls += arr[j];
  }

  for (let j = i + 1; j < arr.length; j++) {
    const element = arr[j];

    rs += element;
  }

  if (ls === rs) {
     console.log("true",i)
  }
}

// prefix sum array 



