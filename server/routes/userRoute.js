import express from 'express';
import { registerUser } from '../controllers/userController.js';
import { checkDuplicateEmail } from '../middlewares/userAuth.js';

const router = express.Router();

router.route('/register').post(checkDuplicateEmail, registerUser);

export default router;