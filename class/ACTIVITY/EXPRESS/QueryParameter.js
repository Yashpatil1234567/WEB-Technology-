// // What are Query Parameters?
// //Query parameters are extra data sent in URL after ?
// http://localhost:3000/user?name=Yash&age=19




app.get('/user', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;

    res.send(`Name: ${name}, Age: ${age}`);
});

app.get('/search', (req, res) => {
    const product = req.query.product;
    res.send(`Searching for product: ${product}`);
});


// Query parameters are used for :
//  filtering, searching, sorting, and pagination in real-world applications