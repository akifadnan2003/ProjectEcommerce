import express from 'express';
import { sendContactUsForm } from '../controllers/apiControllers.js';
const router = express.Router();

router.route('/contactUs').post(sendContactUsForm);

export default router;