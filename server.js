const dotenv = require('dotenv');
const express = require('express');
const customerRouter = require('./server/routes/customer');
const connectDB = require('./server/config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to Database
connectDB();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', customerRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});