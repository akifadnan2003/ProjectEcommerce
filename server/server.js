import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoute from './routes/userRoute.js';
import adminRoute from './routes/adminRoute.js';

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

// Routes
app.use('/user', userRoute);
app.use('/admin', adminRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});