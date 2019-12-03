console.log("Hello World!");

const evens = [2, 4, 6, 8];
const number = [1, 3, 5, 7, ...evens];
console.log(number);

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];
console.log(arr1);