const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/users/:id', (req, res) => {
    const users = [
        { id: 1, name: 'ganesh', age: 25 },
        { id: 2, name: 'ganeshmali', age: 30 },
        { id: 3, name: 'Charlie', age: 35 }
    ];
    res.json(users[res.req.params.id - 1]);
     
});





app.listen(port, () => {
  console.log(`Example app listening on port http://localhost/${port}`)
})



