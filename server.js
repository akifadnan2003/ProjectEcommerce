import dotenv from 'dotenv';
import express from 'express';
import connectDB from './server/config/db.js';
import pageRoute from './server/routes/pageRoute.js';
import userRoute from './server/routes/userRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to Database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', pageRoute);
app.use('/register', userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});