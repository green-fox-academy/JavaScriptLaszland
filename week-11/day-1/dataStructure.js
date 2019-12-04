'use strict';

let example = 'In a dishwasher far far away';
console.log(example.replace('dishwasher', 'galaxy'));

function reverse(text) {
    return text.split("").reverse().join("");
} 

let reversed = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;
console.log(reverse(reversed));
console.log(reversed);

let todoText = ' - Buy milk\n';
todoText = 'My todo:\n' + todoText;
todoText += ' - Download games\n';
todoText += ' \t- Diabolo';

console.log(todoText);

