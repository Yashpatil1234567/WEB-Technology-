//singleton object
const user=new Object;
console.log(user);

const user2={};
user2.name="yash";
user2.age=20;
user2.email="yp421416@gmail.com";
user2.city="Ichalkaranji";
user2.isLoggedIn=true;
console.log(user2);
const regularUser={
    email:"myemail@gmail.com",
    userDetails:{
        name:"yash",
        age:21,

    }

}
console.log(regularUser);
console.log(regularUser.userDetails.name);