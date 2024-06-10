import express from 'express';
import { loginUser, logoutUser, registerUser, getUser } from '../controllers/userController.js';
import { checkAuth, checkDuplicateEmail } from '../middlewares/userAuth.js';

const router = express.Router();

router.route('/login').post(loginUser);
router.route('/logout').post(logoutUser);
router.route('/register').post(checkDuplicateEmail, registerUser);
router.route('/get-user').get(checkAuth, getUser);

export default router;