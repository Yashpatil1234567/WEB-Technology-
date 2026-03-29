// Activities =>
// 1) package.json and package-lock.json
//=>package.json contains the dependencies and version of the dependencies that our project is using
// and in package-lock.json it contains the exact version of the dependencies and their dependencies

//2) dev dependencies and dependencies
//=>Dependencies are required to run the application.
// while devDependencies are only required during development and not needed in production

//3) HTTP request and response 
//=>HTTP request is a message sent by a client to a server to request data or perform an action.
//  such as GET(to fetch data), POST(to send data), PUT(update data), or DELETE(to delete data).

//4)what is middleware function and why we use in company level project
//and there real time examples 

//5)types of middleware function in express JS
//write 2 or 3 examples of proper midlleware function in express JS


const express = require('express') // import express module
const app = express()// create an instance of express / variable 
const port = 3000// define the port




function checkout(req,res,next){
    console.log(req,URL)
    app.use
    next()// call the next middleware function in the stack
}



app.get('/', (req, res) => {  // define a route for the root URL
  res.send('Hello World!')// define a route for the root URL and send a response
})

app.get('/about', (req, res) => {  
    res.send('This is the about page')
})

app.get('/contact', (req, res) => {  
    res.send('This is the contact page')
})

app.get('/email',(req,res)=>{
    res.send('this is the email page')
})


func


app.listen(port, () => {  
  console.log(`Example app listening on port ${port}`)
})


// routing in express JS 
// it refers to determining how our application respond to the client request 
// for a specific URL and http request 


// Middleware in express JS
// these are the functions that executes during the lifecycle of a request before sending the final response .
// they have access to request response and next 

