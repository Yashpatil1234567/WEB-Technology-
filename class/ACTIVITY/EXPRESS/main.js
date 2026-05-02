// package.json vs package-lock.json
// (1) package.json - Main project file and What you want
// Contains:
// Project name, version
// Dependencies (libraries you installed)
// Scripts (start, build, etc.)
// (2) package-lock.json - Auto-generated file
// Contains:
// Exact versions of installed dependencies
//What you actually installed


// 2 : Difference between dependencies and devDependencies

// dependencies - Required for the application to run in production
// devDependencies - Required only for development and testing


//3 :Routes creation and using JS in Express

const express = require('express');
const app = express();

// GET route
app.get('/', (req, res) => {
    res.send("Hello World");
});

// Route with JS logic
app.get('/sum', (req, res) => {
    let a = 5;
    let b = 10;
    let result = a + b;

    res.send("Sum is: " + result);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

// 4 :types of HTTP methods GET, PUT, POST, DELETE

app.get('/users', (req, res) => {
    res.send("Get all users");
});

app.post('/users', (req, res) => {
    res.send("User created");
});

app.put('/users', (req, res) => {
    res.send("User updated");
});

app.delete('/users', (req, res) => {
    res.send("User deleted");
});

