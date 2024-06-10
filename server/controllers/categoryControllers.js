import Category from '../models/categoryModel.js';
import slugify from 'slugify';
import asyncHandler from 'express-async-handler';
import ApiError from '../utils/apiError.js';
import ApiFeatures from '../utils/apiFeatures.js';
import {deleteOne,updateOne,createOne,getOne,getAll} from './handlersFactory.js';
import { get } from 'mongoose';
//@desc Get all categories
//@route GET /category
//@access Public
export const getCategories = getAll(Category);

//@desc Get a specific category by id
//@route GET /category/:id
//@access Public
export const getCategory = getOne(Category);

//@desc Create a category
//@route POST /category
//@access Private
export const createCategory = createOne(Category);

//@desc Update a specific category
//@route PUT /category/:id
//@access Private
export const updateCategory = updateOne(Category);

//@desc Delete a specific category
//@route DELETE /category/:id
//@access Private
export const deleteCategory = deleteOne(Category);
