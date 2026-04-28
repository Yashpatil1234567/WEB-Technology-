// blocking code : it blocks the execution of other code until it finishes its task
console.log("Start");

for(let i=0; i<1e9; i++) {} // heavy task

console.log("End");

// non-blocking code : it allows other code to execute while it is still running    
console.log("Start");

setTimeout(() => {
    console.log("Hello");
}, 2000);

console.log("End");

//3. Real-Life Examples (Sync vs Async)
// #Synchronous (Blocking)
// ATM transaction → complete one step then next
//  #Asynchronous (Non-Blocking)
// WhatsApp messages → receive anytime


// 4.	API fetch method 
async function getData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getData();



// FETCH method :

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

//async/await method :

async function getPosts() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();

        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getPosts();


// fetching data and displaying first 5 post titles
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        let firstFive = data.slice(0, 5);

        firstFive.forEach(post => {
            console.log(post.title);
        });
    })
    .catch(err => console.log(err));


//creating a promise that resolves after 3 seconds
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success after 3 seconds");
    }, 3000);
});

promise1.then(res => console.log(res));




// PROMISES 

//1. Why Promises are better than Callbacks
// # Problem with Callbacks:
// Hard to read and maintain
// Error handling is messy
// # Why Promises are better:
// Cleaner code 
// Better error handling using .catch()
// Works perfectly with async/await

//2/promise example
let promise = new Promise((resolve, reject) => {
    resolve("Success");
});

promise.then(res => console.log(res));

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data loaded after 2 sec");
    }, 2000);
});

promise.then(res => console.log(res));

let promise = new Promise((resolve, reject) => {
    resolve(10);
});

promise
    .then(num => num * 2)
    .then(num => num + 5)
    .then(result => console.log(result)); // 25

    