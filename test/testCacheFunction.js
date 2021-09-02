// A cache (object) [20:400]
const id1 = require("../cacheFunction.js");
const SquareMethod = (m) => {
  return m * m;
};

var square = id1.PublicCache(SquareMethod);

console.time("Execution Time");
console.log(square(20000));
console.timeEnd("Execution Time");

console.time("Execution Time");
console.log(square(20000));
console.timeEnd("Execution Time");

console.time("Execution Time");
console.log(square(20000));
console.timeEnd("Execution Time");
