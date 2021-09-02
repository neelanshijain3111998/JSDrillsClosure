//Program:Limit the Add function upto 5 times
const id1 = require("../LimitFunctionCallCount.js");

const Addition = function (a, b) {
  return a + b;
};
var Add = id1.Publiclimit(Addition, 5);
console.log(Add(4, 5));
console.log(Add(1, 2));
console.log(Add(3, 4));
console.log(Add(5, 6));
console.log(Add(5, 3));
console.log(Add(3, 4));
