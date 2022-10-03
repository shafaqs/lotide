const eqArrays = function(array1, array2) {
  //need to compare array1 with array2
  //loop to run and check if elements match
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


//eqObject starts below

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {

    const value1 = object1[key];
    const value2 = object2[key];
    if (Array.isArray(value1)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    }
    else if (value1 !== value2) {
      return false;
    }
  }
  return true;
};



//assertObjectEquals start here

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
  else {
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  console.log();
};
/*const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // ...
};*/

assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 2 });

assertObjectsEqual({ a: '1', b: 4 }, { a: '1', b: 2 });