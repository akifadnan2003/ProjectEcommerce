import express from 'express';
import * as userController from '../controllers/userController.js';

const router = express.Router();

router.route('/').get(userController.homepage);
router.route('/register').get(userController.register);

export default router;