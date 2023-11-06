const express = require('express')
const router = express.Router();

// Get login page
router.get('/login', (req, res) => {
    res.render('login'); 
  });
  
  // POST login form submission
router.post('/login', (req, res) => {
  // Handle the submitted form data, perform authentication, and redirect or send a response as needed.
});

module.exports = router;