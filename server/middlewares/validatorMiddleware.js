import {validationResult} from 'express-validator';
// @desc: Middleware to validate the request body
const validatorMiddleware = (req, res ,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
    }
    next();
};
export default validatorMiddleware;