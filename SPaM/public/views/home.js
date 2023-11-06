const express = require('express')
const router = express.Router()

router.get('/', (response, request, next) => {
    request.render('home', {
        name: 'Michael and Adriana'
    })
})

module.exports = router;