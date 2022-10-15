const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👻 Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`😵 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
//starting countOnly from here
//itemsToCount = { 	a: true, 	d: true, 	b: false, 	f: true }
//allItems = [a,  a,  b,  c , d, e, a]
const countOnly = function(allItems, itemsToCount) {
  const result = {} 
  for (let i = 0; i<allItems.length; i++){
    const item = allItems[i]  //when i = 0 item = Karl
    if (itemsToCount[item]){
      if(result[item]){
        result[item]+= 1
      }else{
        result[item] = 1
      }
      //continue to the next loop
      
    }
  
  }
  console.log(result)
return result;
}
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;