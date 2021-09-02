const id1 = require("../LimitFunctionCallCount.js");

const display = function () {
  return "hello world!!";
};
var result = id1.Publiclimit(display, 5);
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());
