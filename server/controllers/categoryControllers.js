import Category from '../models/categoryModel.js';
import slugify from 'slugify';
import asyncHandler from 'express-async-handler';
import ApiError  from '../utils/apiError.js';   
//@desc Get all categories
//@route GET /category
//@access Public
export const getCategories = asyncHandler(async (req, res) => {
    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const skip = (page - 1) * limit;
    const categories = await Category.find({}).skip(skip).limit(limit);
    res.status(200).json({results : categories.length,page,data:categories});
});

//@desc Get a specific category by id
//@route GET /category/:id
//@access Public
export const getCategory = asyncHandler(async (req, res ,next) => {
    const {id} = req.params;
    const category = await Category.findById(id);
    if(!category){
       return next(new ApiError(`Category not found for this ID: ${id}`,404));
    }
    res.status(200).json({data:category});
}); 

//@desc Create a category
//@route POST /category
//@access Private
export const createCategory = asyncHandler(async (req, res) => {
    const name = req.body.name;
    const category = await Category.create({name,slug:slugify(name)});
    res.status(201).json({data:category});
});

//@desc Update a specific category
//@route PUT /category/:id
//@access Private
export const updateCategory = asyncHandler(async (req, res,next) => {
    const {id} = req.params;
    const {name} = req.body;
    const category = await Category.findOneAndUpdate({_id:id},{name , slug:slugify(name)},{new:true});
    if(!category){
        return next(new ApiError(`Category not found for this ID: ${id}`,404));
    }
    res.status(200).json({data:category});
});

//@desc Delete a specific category
//@route DELETE /category/:id
//@access Private
export const deleteCategory = asyncHandler(async (req, res ,next) => {
    const {id} = req.params;
    const category = await Category.findByIdAndDelete(id);
    if(!category){
        return next(new ApiError(`Category not found for this ID: ${id}`,404));
    }
    res.status(204).send();
});