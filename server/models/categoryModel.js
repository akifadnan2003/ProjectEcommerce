import mongoose from "mongoose"; //import mongoose

//create schema
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Category is required'],
        unique: [true, 'Category already exists'],
        minlength: [2, 'Too short category name'],
        maxlength: [32, 'Too long category name'],
    },
    slug: { //store url friendly version of category name
        type: String,
        lowercase: true,
        unique: true,
        index: true,
    }
}, {timestamps: true});

//convert schema to model
const Category = mongoose.model('Category', categorySchema);

//export model
export default Category;