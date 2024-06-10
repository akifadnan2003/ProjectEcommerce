import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Order must belong to a user']
    },
    cartItems: [
        
    ],
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
