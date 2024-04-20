import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
        dbName: process.env.MONGODB_DB
    }).then(() => {
        console.log('Database connection successful');
    }).catch((error) => {
        console.log(`Database connection error: ${error.message}`);
    });
}

export default connectDB;