const express = require('express')
const router = express.Router();

// Get login page

router.get('/login', (req, res) => {
    res.render('login'); 
  });

module.exports = router;