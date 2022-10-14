const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false); // => false



assertEqual(eqArrays(["house", "house"], ["house", "house", "cat"]), false);
assertEqual(eqArrays(["light", "light"], ["light", "light"]), true);
assertEqual(1, 1);