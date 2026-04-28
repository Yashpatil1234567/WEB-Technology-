// arithmetic operators
let a=10
let b=6
console.log(a+b) // addition
console.log(a-b) // subtraction
console.log(a*b) // multiplication
console.log(a/b) // division
console.log(a%b) // modulus 


// Conversion operators
let c="5"
console.log(Number(c))//
console.log(String(a))//
console.log(Boolean(a))// true
console.log(Boolean(0))// false 


// string addition 
let str1="hello"
let str2="world"
console.log(str1+str2)

// increment and decrement operators
let x=10;
console.log(x++)
console.log(x--)
console.log(++x)
console.log(--x)

// comparison operators
console.log(a==b)
console.log(a!=b)
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)

// Comparison of null and undefined
// in null datatype we intentionally assign the null value
// in undefined we create varible but didnt assign any value to it
let d=null
let e=undefined
console.log(d==e) // true
console.log(d===e) // false

// math.random() generates a random number between 0 and 1
console.log(Math.random())

// Functions activity :

function add(x,y){// function declaration
    return x+y;
}

add(5,10) // function call

//arrow function
const subtract = (s1, s2) => {
    return s1 - s2;
}

// String methods
let str="hello welcome to javascript"
console.log(str.length) // length of the string
console.log(str.toUpperCase()) // convert to uppercase
console.log(str.toLowerCase()) // convert to lowercase
console.log(str.indexOf("javascript")) // find index of substring



// Array methods
const arr=[10,11,12,13,14]
console.log(arr.slice(1,4)) // slice method
console.log(arr.splice(2,1)) // splice method
console.log(arr) // modified array after splice 
console.log(arr.toSpliced(2,1)) // toSpliced method does not modify the original array


