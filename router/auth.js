const express = require('express')
const router = express.Router()
const {
    signUp
} = require('../controllers/authController')

router.post('/api/signUp', signUp);
module.exports = router;