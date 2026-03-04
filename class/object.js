//we can declare 2 tpes of object 1.object literal 2.object singleton
//object literals
let user={
    name:"yash",
    age:21,
    email:"yp421416@gmail.com",
    city:"Ich",
    isLogin:true,
    lastlogin:["Monday","Tuesday"],
    "Full name":"yash patil",

}
console.log(user);
console.log(user.email);
console.log(user["Full name"]);
user.name="Aryan";
console.log(user.name);
//Object.freeze(user);//used for fix  freeze value
user.name="Mamata";
console.log(user.name);
const mysym=Symbol("MArcos");
const object1={
 name:"yash",
 age:21,
 [mysym]:"myvalue"
}
console.log(object1);
console.log(object1[mysym]);
console.log(typeof(mysym));
user.greeting=function(){
    console.log("Hello. js");
}
user.greeting();

user.greeting2=function(){
    console.log(`${this.age}`);
}
console.log(user.greeting2());