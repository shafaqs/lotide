const eqArrays = function(array1, array2){
  //need to compare array1 with array2
  //loop to run and check if elements match
  
  if(array1.length === array2.length){    
    for(let i = 0; i<array1.length; i++){
      if (array1[i] !== array2[i]){
        return false
      }
    } 
    return true
  }
  else 
    return false 
       
}
    const assertArraysEqual = function(array1, array2 ){
      if(eqArrays(array1, array2))
        console.log("success")
      else 
        console.log("failure")
    }

    const without = function(source , itemsToRemove){
      let mySource = [];
      
      for (let i = 0; i< source.length; i++){
        let found = false;
        for(let j = 0; j<itemsToRemove.length; j++){
          if(source[i]=== itemsToRemove[j]){
            //mySource.splice(i, 1)
            found = true;
          }         
        }
        if (!found)
          mySource.push(source[i]);       
      }
      return mySource
    }
console.log(without([1, 2, 3], [1])) // => [2, 3]


const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);