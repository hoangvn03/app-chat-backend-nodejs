const express = require('express')
const router = express.Router()
const { 
    signUp
} = require('../controller/authController')

router.post('/api/signUp', signUp);
module.exports = router;