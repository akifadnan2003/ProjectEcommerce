import Product from '../models/productModel.js';
import slugify from 'slugify';
import Category from '../models/categoryModel.js';
import asyncHandler from 'express-async-handler';
import ApiError from '../utils/apiError.js';
import ApiFeatures from '../utils/apiFeatures.js';
import e from 'express';

//@desc Get all products
//@route GET /product
//@access Public
export const getProducts = asyncHandler(async (req, res) => {
    //build query
    const documentsCount = await Product.countDocuments();
    const apiFeatures = new ApiFeatures(Product.find(), req.query).paginate(documentsCount).filter().sort().limitFields().search();
     //execute query
     const {mongooseQuery , paginationResults} = apiFeatures;
     const products = await apiFeatures.mongooseQuery;
     res.status(200).json({ results: products.length,paginationResults, data: products });
});

//@desc Get a specific product by id
//@route GET /product/:id
//@access Public
export const getProduct = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate({ path: 'category', select: 'name-_id' });
    if (!product) {
        return next(new ApiError(`Product not found for this ID: ${id}`, 404));
    }
    res.status(200).json({ data: product });
});

//@desc Create a product
//@route POST /product
//@access Private
export const createProduct = asyncHandler(async (req, res) => {
    req.body.slug = slugify(req.body.title);
    const product = await Product.create(req.body);
    res.status(201).json({ data: product });
});

//@desc Update a specific product
//@route PUT /product/:id
//@access Private
export const updateProduct = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    if (req.body.title) {
        req.body.slug = slugify(req.body.title);
    }
    const product = await Product.findOneAndUpdate({ _id: id },
        req.body,
        { new: true });
    if (!product) {
        return next(new ApiError(`Product not found for this ID: ${id}`, 404));
    }
    res.status(200).json({ data: product });
});

//@desc Delete a specific product
//@route DELETE /product/:id
//@access Private
export const deleteProduct = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
        return next(new ApiError(`Product not found for this ID: ${id}`, 404));
    }
    res.status(204).send();
});