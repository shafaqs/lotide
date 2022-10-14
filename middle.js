
const middle = function(array) {
  let midArray = [];
  if (array.length <= 2) {
    return [];
  } else if ((array.length % 2) === 0) {

    mid = array.length / 2;
    midArray.push(array[mid - 1]);
    midArray.push(array[mid]);

  } else if ((array.length % 2) !== 0) {
    midArray.push(array[Math.floor(array.length / 2)]);
  }
  return midArray;
};

module.exports = middle;