//used when we have to give unique id 

let a = Symbol("124");
console.log(typeof(a))

let id =123;
console.log(id===a)

//javascript is a dynamic language .
// non primitive data types of java script

// ARRAY 
const hero=[1,2,3,4];
console.log(hero)

//object - mostly in key value pairs

const myObj={
    myname:"yash",
    myage:20
};
console.log(myObj.myname);
console.log(typeof(myObj));

// function

function myfun()//function defination 
{
    console.log("yash");//function declaration 
}
myfun();//call the function 


let afun=function ()
{
    console.log("yash");//function declaration 
}

afun();



