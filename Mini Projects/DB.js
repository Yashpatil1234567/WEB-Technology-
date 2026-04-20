const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '969696', 
  database: 'dietdb'
});


module.exports = db;