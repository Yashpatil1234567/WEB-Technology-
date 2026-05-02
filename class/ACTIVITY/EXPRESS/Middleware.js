//Middleware = beech ka function jo request ko control karta hai
//Middleware ka use hota hai request aur response ke beech me processing karne ke liye

//2)2. Types of Middleware
//1) Application-level Middleware
app.use((req, res, next) => {
    console.log("Middleware running");
    next();
});
//2) Router-level Middleware
app.get('/user', (req, res, next) => {
    console.log("User route middleware");
    next();
}, (req, res) => {
    res.send("User Page");
});
//3) Error-handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
}); 
//4) Built-in Middleware
// Express has built-in middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//Benefits of Middleware
//Code reusable hota hai
//Same middleware multiple routes me use kar sakte ho
//Code clean rehta hai
//used to improve security and authentication
//Authentication, validation easily handle
//Easy debugging
//request flow track kar sakte ho

// in companies, middleware is used for various purposes like:
//1) Authentication and Authorization
//2) Logging and Monitoring 
//3) Error Handling
//4) Data Validation
//5) CORS Handling  

