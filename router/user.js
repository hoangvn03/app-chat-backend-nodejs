import express from 'express';
import * as controllers from '../controllers/index.js';
import verifyToken from '../middlewares/verify_token.js';
const router = express.Router();
//PUBLIC ROUTES

//PRIVATE ROUTES
router.use(verifyToken);
router.get('/getUser', controllers.getCurrentUser);
router.put('/api/update_user/:id', controllers.updateUser);
router.delete('/api/delete_user/:id', controllers.deleteUser);

export default router;
