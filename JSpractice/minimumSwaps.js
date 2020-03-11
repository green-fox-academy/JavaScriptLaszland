let input = [1, 5, 6, 4, 7, 8, 2, 3, 9, 10];

function minimumSwaps (arr) {
  // initialize a variable to store swaps
  var swapCounter = 0;
  // loop through the rest of the array
  for (let i = 0; i < arr.length; i++) {
    // filter all the items who aren't on place arr[i] !== i - 1
    if (arr[i] !== i + 1) {
      // swapcounter++
      swapCounter++;
      // take the first element and swap to its place
      swap(arr, i, arr[i] - 1);
      i--;
    }
  }
  return swapcounter;
};

function swap (arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

minimumSwaps(input);