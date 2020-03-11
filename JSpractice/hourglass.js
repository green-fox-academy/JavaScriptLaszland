let input1 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]

let input2 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 9, 2, -4, -4, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0]
]

function maxHourGlas (arr) {
  // create array for sums
  let sums = [];
  // iterate through the matrix and calculate the sums
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[0].length - 2; j++) {
      let upper = arr[i][j] + arr[i][j+1] + arr[i][j+2];
      let neck = arr[i+1][j+1];
      let bottom = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
  
      sums.push(upper + neck + bottom);
    }
  }

  console.log(sums);
  // push sum into array
  // find the max value of the array
  let maxValue = findMax(sums);
  console.log(maxValue);
}

function findMax (arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

maxHourGlas(input1);
maxHourGlas(input2);