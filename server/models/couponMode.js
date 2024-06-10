import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Name is required'],
    },
    expiry: {
        type: Date,
        required: [true, 'Expiry is required'],
    },
    discount: {
        type: Number,
        required: [true, 'Discount is required'],
    }
}, { timestamps: true });

export default mongoose.model('Coupon', couponSchema);
