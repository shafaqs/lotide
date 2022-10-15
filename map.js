const words = ["ground", "control", "to", "major", "tom"];

  const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
      console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');

    }
    
    return results;
  }
    
  
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
    const assertArraysEqual = function(array1, array2 ){
      if(eqArrays(array1, array2))
        console.log("success")
      else 
        console.log("failure")
    }
      assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
      assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])// => true
      assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
      assertArraysEqual(["1", "2", "3", "4"], ["1", "2", 3], )// => false
      assertArraysEqual([1, 2, 3, 4], map([0, 1, 2, 3],  n => n+1 ))


      module.exports = map;