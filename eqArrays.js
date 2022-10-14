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

module.exports = eqArrays;

