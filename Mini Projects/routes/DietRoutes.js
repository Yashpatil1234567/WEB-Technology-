const express = require('express');
const router = express.Router();
const db = require('../DB');

// ➤ Add food
router.post('/add', (req, res) => {
  const { food_name, calories, date } = req.body;

  db.query(
    'INSERT INTO diet (food_name, calories, date) VALUES (?, ?, ?)',
    [food_name, calories, date],
    (err, result) => {
      if (err) return res.send(err);
      res.send('Food Added ');
    }
  );
});
router.put('/update/:id', (req, res) => {
  const { food_name, calories, date } = req.body;
  const { id } = req.params;

  db.query(
    'UPDATE diet SET food_name=?, calories=?, date=? WHERE id=?',
    [food_name, calories, date, id],
    (err, result) => {
      if (err) return res.send(err);
      res.send('Entry Updated ');
    }
  );
});

// ➤ Get all data
router.get('/', (req, res) => {
  db.query('SELECT * FROM diet', (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
});


// ➤ Delete entry
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM diet WHERE id=?', [id], (err) => {
    if (err) return res.send(err);
    res.send('Entry Deleted ');
  });
});

module.exports = router;