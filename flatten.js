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
  
  const flatten = function(array){
    flattenArray = []
    for(let element of array){
      if(Array.isArray(element)){
        for(let i =0; i<element.length; i++){
          flattenArray.push(element[i])
        }
      }
      else flattenArray.push(element)
    }
    return flattenArray
  }

  console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]

