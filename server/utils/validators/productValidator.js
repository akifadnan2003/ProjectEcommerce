import { check ,body} from "express-validator";
import validatorMiddleware from "../../middlewares/validatorMiddleware.js";
import Category from "../../models/categoryModel.js";
import slugify from "slugify";

//Create validator for product routes with specific rules
export const createProductValidator = [
    check("title", "Title is required")
        .notEmpty()
        .isLength({ min: 3, max: 32 })
        .withMessage("Product title must be between 3 to 32 characters")
        .custom((val, { req }) => {
            req.body.slug = slugify(val);
            return true;
        }),
    check("description", "Description is required")
        .notEmpty()
        .isLength({ min: 10, max: 2000 })
        .withMessage("Product description must be between 10 to 2000 characters"),
    check("sold", "Sold is required")
        .notEmpty()
        .isNumeric()
        .withMessage("Product sold quantity must be a number"),
    check("price", "Price is required")
        .notEmpty()
        .isNumeric()
        .withMessage("Price must be a number")
        .isLength({ min: 1, max: 20 })
        .withMessage("Price must be between 1 to 20 digits"),
    check("priceAfterDiscount", "Price after discount is required")
        .optional()
        .toFloat()
        .notEmpty()
        .isNumeric()
        .withMessage("Price after discount must be a number")
        .custom((value, { req }) => {
            if (value > req.body.price) {
                throw new Error("Price after discount must be less than the original price");
            }
            return true;
        }),
    check("productSize", "Product size is required").notEmpty(),
    check("imageCover", "Product image cover is required")
        .notEmpty(),
    check("images", "Product images must be an array of strings")
        .optional()
        .isArray(),
    check("category", "Category is required")
        .notEmpty()
        .isMongoId()
        .withMessage("Category must be a valid MongoDB ID")
        .custom((categoryId) => Category.findById(categoryId).then((category) => {
            if (!category) {
                return Promise.reject(new Error(`No Category for this ID ${categoryId}`));
            }
        })),
    check("ratingsAverage", "Ratings average is required")
        .optional()
        .isNumeric()
        .withMessage("Ratings average must be a number")
        .isLength({ min: 1, max: 5 })
        .withMessage("Ratings average must be between 1 to 5"),
    check("ratingsQuantity", "Ratings quantity is required")
        .optional()
        .isNumeric()
        .withMessage("Ratings quantity must be a number")

    , validatorMiddleware,
];

export const getProductValidator = [
    check("id", "Product ID is required")
        .notEmpty()
        .isMongoId()
        .withMessage("Product ID must be a valid MongoDB ID"),
    validatorMiddleware,
];

export const updateProductValidator = [
    check("id", "Product ID is required")
        .isMongoId()
        .withMessage("Product ID must be a valid MongoDB ID"),
    body('title').custom((val, { req }) => {
        req.body.slug = slugify(val);
        return true;
    })
];

export const deleteProductValidator = [
    check("id", "Product ID is required")
        .isMongoId()
        .withMessage("Product ID must be a valid MongoDB ID"),
    validatorMiddleware,
];