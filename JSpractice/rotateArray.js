'use strict'

let inputArray = [1, 5, 4, 8, 9, 2];
let numbOfRotation = 123;

console.log(inputArray);

function rotateArray (arr, numb) {
  let rotatedArr = arr;
  let numbOfRotation = (numb % rotatedArr.length);
  console.log(numbOfRotation);
  for (let i = 0; i < numbOfRotation; i++) {
    rotatedArr.push(arr[i]);
  }
  let output = rotatedArr.slice(numbOfRotation, rotatedArr.length)
  console.log(output);
}

rotateArray(inputArray, numbOfRotation);