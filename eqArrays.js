const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👻 Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`😵 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(array1, array2){
//need to compare array1 with array2
//loop to run and check if elements match
// for of loop through 1st array
for(let i = 0; i<array1.length; i++){
  if (array1[i] !== array2[i]){
    return false
  }
}
  return true   
  }

  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
  assertEqual(eqArrays(["1", "2", "3", "4"], ["1", "2", 3]), false) // => false



eqArrays(["house","house"], ["house", "house"])
assertEqual(["light", "light"], ["light", "light"]);
assertEqual(1, 1);