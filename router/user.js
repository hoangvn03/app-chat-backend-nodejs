import express from 'express';
import * as controllers from '../controllers/index.js';
import verifyToken from '../middlewares/verify_token.js';
import {isAdmin,isModeratorOrAdmin} from '../middlewares/verify_role.js';

const router = express.Router();
//PUBLIC ROUTES

//PRIVATE ROUTES
router.use(verifyToken);
// router.use(isAdmin);
router.post('/getUser', controllers.getCurrentUser);
router.put('/api/update_user/:id', controllers.updateUser);
router.delete('/api/delete_user/:id', controllers.deleteUser);

export default router;
