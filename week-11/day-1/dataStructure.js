'use strict';

let example = 'In a dishwasher far far away';
console.log(example.replace('dishwasher', 'galaxy'));

function reverse(text) {
    return text.split("").reverse().join("");
} 

let reversed = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
console.log(reverse(reversed));
console.log(reversed);

// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo


String.prototype.splice = function(start, delCount, newSubStr) {
    return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
};
let todoText = ' - Buy milk\n';
todoText = 'My todo:\n' + todoText;
todoText += ' - Download games\n';
todoText += ' \t- Diabolo';

console.log(todoText);