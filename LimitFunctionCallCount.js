// Should return a function that invokes `cb`.
// The returned function should only allow `cb` to be invoked `n` times.
// Returning null is acceptable if cb can't be returned

function limitFunctionCallCount(cb, n) {
  return function () {
    if (n > 0) {
      n -= 1;
      return cb(); //return "hello word"
    } else {
      return null;
    }
  };
}

module.exports = {
  Publiclimit: limitFunctionCallCount,
};
