import express from 'express';
import { loginUser, registerUser } from '../controllers/userController.js';
import { checkDuplicateEmail } from '../middlewares/userAuth.js';

const router = express.Router();

router.route('/login').post(loginUser);
router.route('/register').post(checkDuplicateEmail, registerUser);

export default router;