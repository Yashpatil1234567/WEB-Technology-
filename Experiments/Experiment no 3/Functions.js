// (1) difference between arrow function and normal function

// normal function = uses constructor,need return keyword
 function adds(a,b){
     return a+b;
 }
 adds(2,3);

// arrow function = syntax is very small in this we can not use constructor. implicitly uses this keyword 
const add = (a, b) => a + b;


//(2) write a code using 2 arrow functions with example

// first function 
const Add = (a, b) => a + b;

// second function
const showResult = (result) => {
    console.log("Sum of two elements is:", result);
};

let sum = add(2, 3);
showResult(sum);

//(3) switch case in js 

let day=3;

switch(day)
{
    case 1:
        console.log("monday");
        break;

    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("thrsday");
        break;

    case 4:
        console.log("friday");
        break; 

    default:
        console.log("invalid day");
}

//(4) how to use truthy and falsi value with js ="using this we can evaluate non boolean values as true and false"

let name = "Yash";

if (name) {
  console.log("Name is present");
} else {
  console.log("Name is missing");
}


// spread operator = used to store multiple values in single variable
function myfun(...num1)
{
    return num1;

}

myfun(4,5,6);









// how  to use ternary operators
// loops in js how to use that in array
// difference between for of and forin
//filter and map function in js 
