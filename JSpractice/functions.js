var _ = {};

let increment = n => { return n + 1; };
let square = n => { return n * n; };
let doMathSoIDontHaveTo = (n, func) => { return func(n); };
var input = [];

for (let i = 2345; i < 1000000; i++) {
  input.push(i);
}

console.log(doMathSoIDontHaveTo(5, square));
console.log(doMathSoIDontHaveTo(4, increment));

_.reduce = (list, cb, initial = 0) => {
  let result = initial;
  // loopt through the list
  for (let i = 0; i < list.length; i++) {
    // call the cb arr[i]
    // save the return value
    result = cb(list[i], result);
  }
  return result;
};

console.log(_.reduce(input, (n, sum) => {
  return n + sum;
}, 0));



