
// VARIABLES IN JAVASCRIPT

// 1. Difference between var, let, and const

/*
var:
- Old way to declare variables
- Can be redeclared and updated

let:
- Block scoped
- Can be updated 
- mostly used in industries  for changing values

const:
- Cannot be updated or redeclared
- Used for fixed values
*/

var a = 10;
let b = 20;
const c = 30;

// 2. Types of Data

// A. Primitive Data Types
// These store single values

let A = 25;           // Number
let B= "Hello";      // String
let C = true;        // Boolean
let D;             // Undefined        
let symbol = Symbol("id"); // Symbol
let bigInt = 12345678901234567890n; // BigInt
let E= null ;     //Null

// B. Non-Primitive Data Types(object,function,array)
// These store multiple values or complex data

let objectType = {
  name: "Yash",
  age: 19
};
console.log(objectType);



let arrayType = [1, 2, 3, 4];
console.log(arrayType);


let functionType = function () {
  return "Hello World";
  console.log(functionType);
  
};


// 3. Variable Declaration and typeof

console.log(typeof (A));     // number
console.log(typeof(B));     // string
console.log(typeof(C));    // boolean
console.log(typeof (D));  // undefined
console.log(typeof(null));       // object (JavaScript bug)
console.log(typeof objectType);     // object
console.log(typeof arrayType);      // object
console.log(typeof functionType);   // function


// 4. Difference between null and undefined

/*
undefined:
- Variable is declared but not assigned any value

null:
- Value is set to empty
-we can assign the value of any variable as NULL
*/

let x;          // undefined
let y = null;   // null

console.log(x); // undefined
console.log(y); // null
