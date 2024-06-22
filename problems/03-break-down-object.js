/*
Write a function `breakDownObj(obj)` that takes in an object as a parameter
and returns an array containing:  all the keys from the object **and** all the
values of the object.

**Hint**: Use spread syntax to spread out elements into an array!
*/


function breakDownObj(obj)
{
  // create an array
  let arrayToObj = [];

  // put the keys in first followed by
  // the values in the object.
  // have to include keys.
  for(let key of Object.keys(obj))
  {
    // put the key into the array
    arrayToObj.push(key);
  }
  for(let values of Object.values(obj))
  {
    // put the value in the array
    arrayToObj.push(values);
  }

  return arrayToObj;
}


console.log(breakDownObj(
  { name: 'Rupert', age: 5, speak: 'Meow' }
)); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]
console.log(breakDownObj(
  { location: 'NY', borough: 'Brooklyn' }
)); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = breakDownObj;
} catch {}
