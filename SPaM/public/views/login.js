const express = require('express')
const router = express.Router();

// Get login page

router.get('/', (request, response, next) => {
    response.render('home', {
        name: 'Mike and Adriana'
    })

    next
})

router.post('public/views/login', (request, response) =>{
    response.redirect('login')
})

module.exports = router;