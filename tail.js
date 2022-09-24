const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👻 Assertion Passed: ${actual} === ${expected}`);
  } 
  else {
    console.log(`😵 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(array) {
  return array.slice(1);
};
const array = ["Hello", "Lighthouse", "Labs"];
const result = tail(array);
assertEqual(array.length, 3);
assertEqual(result[0],"Lighthouse");
assertEqual(result[1], "Labs");