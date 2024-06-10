import express from 'express';
import {
        createProductValidator,
        getProductValidator,
        updateProductValidator,
        deleteProductValidator
} from '../utils/validators/productValidator.js';
import {
        getProduct,
        getProducts,
        createProduct,
        updateProduct,
        deleteProduct,
} from '../controllers/productControllers.js';

const router = express.Router();

router.route('/').get(getProducts).post(createProductValidator, createProduct);
router.route('/:id').get(getProductValidator, getProduct)
        .put(updateProductValidator, updateProduct)
        .delete(deleteProductValidator, deleteProduct);

export default router;