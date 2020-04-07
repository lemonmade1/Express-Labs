const express = require('express');
const router = express.Router();

/* GET HOME PAGE */
router.get('/', (req, res) => {
  res.render('index', { title: 'Software Engineer Skills' });
});

module.exports = router;
