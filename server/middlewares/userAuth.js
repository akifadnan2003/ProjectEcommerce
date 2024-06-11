import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

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

// Middleware to check if the user is authenticated
export const checkAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Fetch the user from the database
        const user = await User.findById(decoded.id).select('-password');
        // Add the user to the request
        req.user = user;

        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            error: 'Not authenticated CHECK AUTH' + error.message
        });
    }
};

export const authorize = (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ error: 'Forbidden' });
  }
};