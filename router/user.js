import express from 'express';
import { getAllUsers, updateUser, deleteUser } from '../controllers/user.js';

const router = express.Router();

router.get('/api/user_info', getAllUsers);
router.put('/api/update_user/:id', updateUser);
router.delete('/api/delete_user/:id', deleteUser);

export default router;
