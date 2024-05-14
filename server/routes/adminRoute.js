import express from 'express';
import User from '../models/userModel.js';
import { checkAuth, authorize } from '../middlewares/userAuth.js';

const router = express.Router();

router.put('/makeAdmin/:userEmail', checkAuth, authorize, async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({ email: req.params.userEmail }, { isAdmin: true }, { new: true });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error updating user' });
  }
});

export default router;