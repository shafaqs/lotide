const assertArraysEqual = function(array1, array2 ){
  if(eqArrays(array1, array2))
    console.log("success")
  else 
    console.log("failure")
}

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

//letterPositions below




const letterPositions = function(sentence) {
  const results = {};
  for(let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") continue;
    if(!(results[sentence[i]])){
      let arr = []
      arr.push(i)
      results[sentence[i]] = arr;
  }
  else{  
    results[sentence[i]].push(i);
  }           
  }
  return results;
};
console.log(letterPositions("I eat fruits daity"))
//assertArraysEqual(letterPositions("hello").e, [1]);