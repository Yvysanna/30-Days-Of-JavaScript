/* Create datatypes.js file and use the JavaScript typeof operator to check different data types. 
Check the data type of each variable */

let firstName = 'Yvette';
let secondName = `Rosanna`;
let lastName = "Schröder";
let isStudent = true;
let birthdate;
const money = null;

// Check the data type of each variable 
console.log(typeof(firstName));
console.log(typeof(isStudent));
console.log(typeof(money) === Number);
console.log(typeof(money));

// True, bc Object is function and Object() is object
console.log(typeof(money) === typeof(Object()));