//1) Number : convert any value to number 
let a=Number("25");
console.log(typeof(a));

//2) ParseInt : use to convert decimal value to integer
console.log(parseInt("40.09"))

//3) ParseFloat : use to get decimal value with integer value
console.log(parseFloat("45.992"));

//4) toFixed : Decimal ko fixed digits tak round karta hai
let num = 12.456;
num.toFixed(2);  

//5) toString : Number ko string banata hai
let n = 100;
console.log(n.toFixed(2))

// 2 .. Math Methods 

//1) round() : takes nearest integer value
console.log(Math.round(2.6));

//2) floor() : takes nearest integer which is less than given number
console.log(Math.floor(4.1));

//3) ceil() : takes big integer than the given number 
console.log(Math.ceil(4.1));

//4) max() : it takes the max value 
console.log((Math.max(4,1)));

//5) min() : it takes the minimum value
console.log(Math.min(5,7));

//6) abs() : Positive value return karta hai
console.log(Math.abs(-10));

//7)sqrt() : gives square  root of given number
console.log(Math.sqrt(36));

// it selects the random number from in between 0 to 1 
console.log(Math.random());














