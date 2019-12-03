console.log("Hello World!");


const evens = [2, 4, 6, 8];
const number = [1, 3, 5, 7, ...evens];
console.log(number);

// concatenating two arrays
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];
console.log(arr1);

// array methods
let fruits = ['apple', 'pear', 'melon'];
console.log(fruits.indexOf('pear'));
fruits.forEach(function(e, i) {
    console.log(e, i);
});

let triples = [1, 2, 3, 4, 5];
console.log(triples.map(function(e){
    return e * 3;
}));

console.log(triples.filter(function(e){
    return e % 2 == 0;
}))

let newNumbers = [2, 6, 14, 5, 4];
console.log(newNumbers.every(function(e){
    return e % 2 == 0;
}));

console.log(newNumbers.some(function(e){
    return e % 2 == 0;
}));

let letters = 'apple'.split('');
console.log(letters);
console.log(letters.join('@'));