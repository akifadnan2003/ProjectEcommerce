import asyncHandler from 'express-async-handler';
import ApiError from '../utils/apiError.js';
import ApiFeatures from '../utils/apiFeatures.js';
import e from 'express';

const deleteOne = (Model) => asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const doc = await Model.findByIdAndDelete(id);
    if (!doc) {
        return next(new ApiError(`Document not found for this ID: ${id}`, 404));
    }
    res.status(204).send();
});

const updateOne = (Model) => asyncHandler(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!doc) {
        return next(new ApiError(`Document not found for this ID: ${req.params.id}`, 404));
    }

});
const createOne = (Model) => asyncHandler(async (req, res) => {
    const doc = await Model.create(req.body);
    res.status(201).json({ data: doc });
});

const getOne = (Model) => asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const doc = await Model.findById(id);
    if (!doc) {
        return next(new ApiError(`Document not found for this ID: ${id}`, 404));
    }
    res.status(200).json({ data: doc });
});

const getAll = (Model,modelName='') => asyncHandler(async (req, res) => {
    let filter = {};
    if (req.filterObj) {
        filter = req.filterObj;
    }
    const countDocuments = await Model.countDocuments();
    const apiFeatures = new ApiFeatures(Model.find(),
        req.query)
        .paginate(countDocuments)
        .filter()
        .sort()
        .limitFields()
        .search(modelName);
    const { mongooseQuery, paginationResult } = apiFeatures;
    const docs = await mongooseQuery;
    res.status(200).json({ results: docs.length, paginationResult, data: docs });
});
export { deleteOne, updateOne, createOne, getOne, getAll };
