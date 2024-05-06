import User from '../models/userModel.js';

// Middleware to check if email is already in use
export const checkDuplicateEmail = async (req, res, next) => {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
        return res.status(400).json({
            success: false,
            error: 'Email already in use'
        });
    }
    next();
}