const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👻 Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`😵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);


//countLetters begin


const countLetters = function(string) {
  let objLetters = {};
  for (const letter of string) {
    if (letter === " ") continue;
  if (objLetters[letter]) {
    objLetters[letter] += 1
  } else {
    objLetters[letter] = 1
  }
  // console.log(letter)
  }
  return objLetters
}
console.log(countLetters("lighthouse in the house"))