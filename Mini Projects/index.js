const express = require('express');
const app = express();
const cors = require('cors');

require('./DB');

app.use(cors());
app.use(express.json());
app.use(express.static('.'));
app.use('/diet', require('./routes/DietRoutes'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});