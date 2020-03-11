const input = [1, 2, 5, 3, 7, 8, 6, 4];

function minimumBribes(q) {
  let bribeCounter = 0;
  //loop through the array from the end to begin
  for (let i = q.length - 1; i >= 0; i--) {
    // filter only the bribed cases
    if (q[i] !== i + 1) {
      // check if it's bribed once
      if (q[i - 1] === i + 1) {
        bribeCounter++;
        // swap once
        swap(q, i, i - 1);
      // check if it bribed twice
      } else if (q[i - 2] === i + 1) {
        bribeCounter += 2;
        // swap first
        swap(q, i - 2, i - 1);
        // swap second
        swap(q, i - 1, i);
      // default case: console.log('Too chaotic)
      } else {
        console.log('Too chaotic');
        return;
      }
    }
  }
  console.log(bribeCounter);
};

function swap (arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
};

minimumBribes(input);
