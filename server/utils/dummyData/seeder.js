import fs from 'fs';
import dotenv from 'dotenv';
import Product from '../../models/productModel.js';
import connectDB from '../../config/db.js';

dotenv.config();

//connect to database
connectDB();

//Read data
const products = JSON.parse(fs.readFileSync('./products.json'), 'utf-8');

//Insert data into database
const insertData = async () => {
    try {
        await Product.create(products);
        console.log('Data inserted successfully'.green.inverse);
        process.exit();
    } catch (error) {
        console.error('Error while importing data');
    }
};

//Delete data from database
const deleteData = async () => {
    try {
        await Product.deleteMany();
        console.log('Data deleted successfully'.red.inverse);
        process.exit();
    } catch (error) {
        console.error('Error while deleting data');
    }
};

//Check if the argument is -i or -d to insert or delete data 
if (process.argv[2] === '-i') { // node seeder.js -i => to insert data
    insertData();
} else if (process.argv[2] === '-d') {   // node seeder.js -d => to delete data
    deleteData();
}