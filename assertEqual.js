const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👻 Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`😵 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//REST CODE: `Hello, ${name}!`
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);