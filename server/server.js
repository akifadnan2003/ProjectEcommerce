import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoute from './routes/userRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3476;

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/user', userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});