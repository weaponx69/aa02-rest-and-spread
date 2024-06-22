/*
Given the array, `arr`, and object, `obj`, use rest and spread to clone them
into `arrRest`/`arrSpread` and `objRest`/`objSpread` respectively.
*/

const arr = [1, "two", "3"];

const obj = {
  red: "circle",
  blue: "square",
  green: "hexagon"
}

// Your code here
let arrRest = [first, ...restOfArray] = arr;  // I guess this is destructuring?
let arrSpread = [...arr];
let objRest = {firstObj, ...restofObject} = obj;
let objSpread = {...obj};

console.log(arrRest);   // [1, "two", "3"]
console.log(arrSpread); // [1, "two", "3"]

console.log(objRest);   // { red: "circle", blue: "square", green: "hexagon" }
console.log(objSpread); // { red: "circle", blue: "square", green: "hexagon" }


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = {
    arr,
    arrRest,
    arrSpread,
    obj,
    objRest,
    objSpread,
  };
} catch {}
