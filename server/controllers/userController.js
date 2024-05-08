import User from '../models/userModel.js';

// Register a new user
const registerUser = async (req, res) => {
    try {
        const user = await User.create(req.body);

        // Don't send back the password hash
        const userObj = user.toObject();
        delete userObj.password;

        res.status(201).json({
            success: true,
            data: userObj
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

export { registerUser };