import {check } from 'express-validator';
import validatorMiddleware from '../../middlewares/validatorMiddleware.js';
// @desc: Validator for getting a category
export const getCategoryValidator = [
     // this is containing a rule for checking if the id is a valid mongo id and then passing it to the validatorMiddleware
    check('id').isMongoId().withMessage("Invalid category id format"),
    validatorMiddleware
];

// @desc: Validator for creating a category
export const createCategoryValidator = [
    check('name').isLength({min:2}).withMessage("Category name is too short")
    .isLength({max:32}).withMessage("Category name is too long")
    .notEmpty().withMessage("Category name is required")
    ,
    validatorMiddleware
];

// @desc: Validator for updating a category
export const updateCategoryValidator = [
    check('id').isMongoId().withMessage("Invalid category id format")
    ,
    validatorMiddleware
];

// @desc: Validator for deleting a category
export const deleteCategoryValidator = [
    check('id').isMongoId().withMessage("Invalid category id format")
    ,
    validatorMiddleware
];