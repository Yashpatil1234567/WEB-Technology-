// handling  request and response in express js
// express application handles http request and response 
//-----------------------------------------------------------------------
// the request object contains information about client request 
// such as URl,query parameters,headers and request body.

// the response object contains information about the server's response
//---------------------------------------------------------------------------
// the respose object send back to the client 
// common response methods include res.send() - send text
//  res.json() - send json , res.status()- send http status 
//  res.sendfiles()- it send the file to the client . 


const express = require('express') // import express module
const app = express()// create an instance of express / variable 
const port = 3000// define the port

app.get('/user', (req, res) => {
    console.log(req.query.name)
  });  

  // if we didnt know the id of user then we use query parameter to get the data of user

  //localhost:3000/user?name=John  => example of query parameter



  // Activity :
//-------------------------------------------------------------------------------------------
  //1) write 2 or 3 query parameters 
  // 2) understand what is query parameter and why we use it in real world examples


