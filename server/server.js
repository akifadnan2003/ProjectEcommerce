import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import ApiError from './utils/apiError.js';
import globalErrorHandler from './middlewares/errorMiddleware.js';
import userRoute from './routes/userRoute.js';
import adminRoute from './routes/adminRoute.js';
import categoryRoute from './routes/categoryRoute.js';
import productRoute from './routes/productRout.js';
import apiRoute from './routes/apiRoute.js';
import morgan from 'morgan'; // For logging requests

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3476;

// Connect to Database
connectDB();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // URL of the front-end app
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log('Morgan enabled');
}

// Mount Routes
app.use('/user', userRoute);
app.use('/admin', adminRoute);
app.use('/category', categoryRoute);
app.use('/product', productRoute);
app.use('/api', apiRoute);

// Errors customizing
app.all('*', (req, res, next) => {
  next(new ApiError(`Can't find this route:${req.originalUrl}`, 400));
})
// Global error handler middleware in Express
app.use(globalErrorHandler);

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//Handle unhandled promise rejections outside of express
process.on('unhandledRejection', (err, promise) => {
  console.error(`UnhandledRejection Errors : ${err.name} | ${err.message}`);
  server.close(() => {
    console.error(`Shutting down the server due to unhandled promise rejection`);
    process.exit(1);
  });
});