import Product from '../models/productModel.js';
import slugify from 'slugify';
import Category from '../models/categoryModel.js';
import asyncHandler from 'express-async-handler';
import ApiError from '../utils/apiError.js';
import ApiFeatures from '../utils/apiFeatures.js';
import {deleteOne,updateOne,createOne,getOne,getAll} from './handlersFactory.js';
import e from 'express';

//@desc Get all products
//@route GET /product
//@access Public
export const getProducts = getAll(Product,'Product');

//@desc Get a specific product by id
//@route GET /product/:id
//@access Public
export const getProduct = getOne(Product);

//@desc Create a product
//@route POST /product
//@access Private
export const createProduct = createOne(Product);

//@desc Update a specific product
//@route PUT /product/:id
//@access Private
export const updateProduct = updateOne(Product);
//@desc Delete a specific product
//@route DELETE /product/:id
//@access Private
export const deleteProduct = deleteOne(Product);