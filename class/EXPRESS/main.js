const express = require('express')
const app = express()
const port = 3000


/*function checkRoute(request, response, next) {
    console.log("Visited URL:", request.url)
    next()  // important!
}
app.use(checkRoute)
*/


app.use((req, res, next) => {
    console.log("middleware function executed", new Date()) // without next our code will be hang 
      next() // call the next middleware function in the stack
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Welcome to about page')
})

app.get('/projects', (req, res) => {
  res.send('Welcome to project page')
})

app.get('/contact', (req, res) => {
  res.send('Welcome to contact page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// before routes we use middleware function .
