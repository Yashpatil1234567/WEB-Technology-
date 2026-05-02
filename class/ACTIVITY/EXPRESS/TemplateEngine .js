// // Static files = files that don’t change

// // Examples:
// // CSS files
// // Images
// // JavaScript files



// What is Express Router?
//  Router = separate file me routes manage karna

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("User Home");
});

module.exports = router;

const userRoutes = require('./routes/user');

app.use('/user', userRoutes);


// complete express workflow :
// Request → Middleware → Route → Logic → Response

