const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👻 Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`😵 Assertion Failed: ${actual} !== ${expected}`);
  }
};



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
  
const assertArraysEqual = function(array1, array2 ){
  if(eqArrays(array1, array2))
    console.log("success")
  else 
    console.log("failure")
}
//eqObject starts below

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if(keys1.length !== keys2.length){
    return false
  }

  for(const key of keys1){
    
    const value1 = object1[key]
    const value2 = object2[key]
    if (Array.isArray(value1)){
      if(!eqArrays(value1, value2)){
        return false
      }
    }
    else if (value1 !== value2){
      return false
    }  
  }
  return true
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

assertEqual(eqObjects(ab,ba), true)

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true
 const cd2 = { c: "1", d: ["2", 3, 4] };
 assertEqual(eqObjects(cd, cd2), false); // => false

