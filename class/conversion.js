let score="22";
let score_for_bool=true
let_score_for_null=null
let_score_for_undefined=undefined

console.log(typeof(score))
console.log(typeof(score_for_bool))
console.log(typeof(let_score_for_null))
console.log(typeof(let_score_for_undefined))

// if only number is present in the string then 22 number converts in number if in string 22abc present then it cannot convert it .
let g="22abc"
let g_converts=Number(g)
console.log(typeof(g_converts))
console.log(g_converts)


let g_convert=String(g_converts)
console.log(typeof(g_convert))


//activity 1 = boolean , null datatypes conversion 


// arithmetic operations 

console.log(2-2);
console.log(2+2);
console.log(2*2);
console.log(2/2);
console.log(2%2);

//
let str1="hello"
let str2=" ganesh"
console.log(str1+str2);

//conversions
//js only  automaticly convert string to number in arithmetic operations
console.log("1"+2);
console.log("1"+2+2);
console.log(1+"2");
console.log(1+3+"2")
console.log((3+4)*5%3)
