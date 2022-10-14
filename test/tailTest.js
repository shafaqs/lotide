const assertEqual = require('../assertEqual')
const tail = require('../tail')


const array = ["Hello", "Lighthouse", "Labs"];
const result = tail(array);
assertEqual(array.length, 3);
assertEqual(result[0],"Lighthouse");
assertEqual(result[1], "Labs");