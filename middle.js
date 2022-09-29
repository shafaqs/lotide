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
  const middle = function(array){
    let midArray = []
    if (array.length<= 2){
      return []
    } else if((array.length % 2) === 0) {
      
      mid = array.length/2
      midArray.push(array[mid - 1])
      midArray.push(array[mid])
     
    } else if((array.length %2) !== 0) {
      midArray.push(array[Math.floor(array.length/2)]);
    }
    return midArray
  }
  console.log(middle([1, 3, 4, 5])) // => []
  console.log(middle([1, 2, 3, 4, 5])) // => [3])
  console.log(middle([]))
