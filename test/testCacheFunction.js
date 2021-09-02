// A cache (object)
//Program: calculating square of  no
const id1 = require("../cacheFunction.js");
const SquareMethod = (m) => {
  return m * m;
};

var square = id1.PublicCache(SquareMethod);

console.time("Execution Time"); // Execution time
console.log(square(20000)); //calculating square of given no by calling anonymous function.
console.timeEnd("Execution Time");

console.time("Execution Time");
console.log(square(20000));
console.timeEnd("Execution Time");

console.time("Execution Time");
console.log(square(20000));
console.timeEnd("Execution Time");
