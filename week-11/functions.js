/*
function greetFoxAlert() {
    alert('Hello Green Fox');
}
*/

//greetFoxAlert();

function greetFoxLog() {
    console.log('Hello Green Fox!');
}

greetFoxLog();

function greetByName(name) {
    console.log(arguments);
    console.log('Well, hi there,', name);
}

greetByName('Tojas');
greetByName('Barbi', 'CEO');

function greet(greet = 'Hi', name = "pal") {
    console.log(greet, name);
}

greet('Hey');
greet('Hello', 'Tojas');

function makeGreen(name) {
    let newName = `Green ${name}`;
    return newName;
}

let name = makeGreen('Tojas');
greetByName(name);

let baseNum = 123;
function doubling (number) {
    return number * 2;
}
console.log(doubling(baseNum));