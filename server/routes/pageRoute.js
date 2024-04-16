import express from 'express';
import * as pageController from '../controllers/pageController.js';

const router = express.Router();

router.route('/').get(pageController.homepage);
router.route('/register').get(pageController.register);

export default router;