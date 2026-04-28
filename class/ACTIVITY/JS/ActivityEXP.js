// Experiment 1 Activity : 


// display studenyt details in console
let student = {
    name: "yash patil",
    age: 20,
    grade: "A"
};  

console.log(student.name);
console.log(student.age);
console.log(student.grade); 

// even and odd numbers
let num=5
if(num%2==0){
    console.log(num+" is even");
}               
else{
    console.log(num+" is odd");
}   

// check pass or fail
let marks = 40;

if (marks >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}

//Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}       

//Assign Value from One Variable to Another
let a = 10;
let b = a;      
console.log(b); // 10


//Print output to browser console
console.log("Hello World");


// EXPERIMENT 2 Activity :

//Array, Function, Object (Declare & Print)
// Array
let arr = [10, 20, 30];
console.log(arr);

// Function
function greet() {
    console.log("Hello Yash");
}
greet();

// Object
let student = {
    name: "Yash",
    age: 19
};
console.log(student);

//Reverse the number
let num = 1234;
let rev = 0;

while (num > 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
}

console.log("Reversed:", rev);

// 3.Check whether the string is palindrome or not
let str = "madam";
let rev = str.split("").reverse().join("");

if (str === rev) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

// Fibonacci series code

let n = 10;
let a = 0, b = 1;

for (let i = 1; i <= n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}
// Count vowels in string 
let str = "javascript";
let count = 0;

for (let ch of str) {
    if ("aeiou".includes(ch)) {
        count++;
    }
}

console.log("Vowels:", count);
// Find largest element in array
let arr = [5, 10, 25, 8];

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log("Largest:", max);
// Remove duplicates from array
let arr = [1, 2, 2, 3, 4, 4];

let unique = [...new Set(arr)];

console.log(unique);

// Function to find even or odd
function check(num) {
    return (num % 2 === 0) ? "Even" : "Odd";
}

console.log(check(7));


// EXPERIMENT 3 Activity :

// Arrow function with 2 examples
const add = (a, b) => {
    return a + b;
};
console.log(add(2, 3));

// Write code for switch case
let day = 2;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid");
}

// Truthy and falsy values
if ("Hello") {
    console.log("Truthy");
}

// Use ternary operator
let num = 10;

let result = (num % 2 === 0) ? "Even" : "Odd";

console.log(result);

// Loops in js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

// Map and filter function in js

let arr = [1, 2, 3];
let result = arr.map(x => x * 2);//used to transform each element of the array
console.log(result); // [2, 4, 6]

let arr = [1, 2, 3, 4];
let result = arr.filter(x => x % 2 === 0);//used to filter elements based on a condition
console.log(result); // [2, 4]