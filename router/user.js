const express = require('express')
const router = express.Router()
const {
    getAllUsers,
    updateUser,
    deleteUser,
} = require('../controllers/user')


router.get('/api/user_info', getAllUsers);

router.put('/api/update_user/:id', updateUser);

router.delete('/api/delete_user/:id', deleteUser);

module.exports = router;