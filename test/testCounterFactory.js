// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.

const id1 = require("../counterFactory.js");

var myCounter = id1.PublicCounter(); // myCounter now refers to the object returned by counter
console.log(`value after increment: ${myCounter.Increment(2)}`); //call the appropriate "property" function using dot notation
console.log(`value after decrement: ${myCounter.Decrement(2)}`);
