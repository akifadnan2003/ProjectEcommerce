import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxLength: [100, 'Title must be less than 32 characters'],
        minLength: [3, 'Title must be more than 3 characters'],
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        maxLength: [2000, 'Description must be less than 2000 characters'],
        minLength: [10, 'Description must be more than 10 characters'],
    },
    sold: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        trim: true,
        max: [200000, 'Price must be less than 20 digits'],
        min: [1, 'Price must be more than 1 digit'],
    },
    priceAfterDiscount: {
        type: Number,
    },
    productSize: {
        type: String,
        required: [true, 'Product size is required'],
    },
    imageCover: {
        type: String,
        required: [true, 'Product image cover is required'],
    },
    images: [String],
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: [true, 'Category is required'],
    },
    ratingsAverage: {
        type: Number,
        default: 4.0,
        min: [1, 'Rating must be above 1.0'],
        max: [5, 'Rating must be below 5.0'],
    },
    ratingsQuantity: {
        type: Number,
        default: 0,
    },
}
    , { timestamps: true });


const Product = mongoose.model('Product', productSchema);
export default Product;