import * as controllers from '../controllers/index.js';
import express from 'express';
const router = express.Router();
router.post('/register', controllers.register);
export default router;
