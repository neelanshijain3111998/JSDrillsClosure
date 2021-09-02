/*function counterFactory() {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
*/
function counterFactory() {
  var counter = 10;
  console.log(`initial value: ${counter}`);

  var Increment = (size) => {
    counter += size;
    return counter;
  };

  var Decrement = function (size) {
    counter -= size;
    return counter;
  };

  return { Increment: Increment, Decrement: Decrement };
}
module.exports = {
  PublicCounter: counterFactory,
};
