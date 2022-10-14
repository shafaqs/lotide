const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);// => true
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3", "4"], ["1", "2", 3]);// => false