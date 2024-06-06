import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Login a user
const loginUser = async (req, res) => {
    try {
        // Find the user by email
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({
                success: false,
                error: 'Invalid email or password'
            });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                error: 'Invalid email or password'
            });
        }

        // If the password matches, create a JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Store the JWT in a cookie
        // CHANGE secure TO TRUE AND sameSite TO 'none' FOR PRODUCTION!!!
        res.cookie('token', token, { httpOnly: true, secure: false, sameSite: 'lax', maxAge: 1000*60*60*1 });

        // Return a success response
        res.status(200).json({
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

// Register a new user
const registerUser = async (req, res) => {
    try {
        // Hash the password
        const hashedPassword = await hashPassword(req.body.password);

        // Replace the plain text password with the hashed password
        const user = await User.create({
            ...req.body,
            password: hashedPassword
        });

        res.status(201).json({
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

// Get the user
const getUser = (req, res) => {
    try {
        // Check if the user object exists on the request
        if (!req.user) {
            return res.status(400).json({
                success: false,
                error: 'User not found'
            });
        } else {
            // Return the user object
            res.status(200).json({
                success: true,
                data: req.user
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

const logoutUser = (req, res) => {
    console.log('Logged out');
    // CHANGE secure TO TRUE AND sameSite TO 'none' FOR PRODUCTION!!!
    res.cookie('token', '', { httpOnly: true, secure: false, sameSite: 'lax', maxAge: 1 });
    res.status(200).json({
        success: true,
    });
}

export { loginUser, logoutUser, registerUser, getUser };



// Function to hash password
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}