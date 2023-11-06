const express = require('express')
const router = express.Router();

// Get login page

router.get('/', (request, response, next) => {
    response.render('login', {
        name: "Michael or Adriana"
    })
})

module.exports = router;