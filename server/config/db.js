const mongoose = require('mongoose');
const colors = require('colors');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(
            `MongoDB connected ${mongoose.connection.host}`.bgCyan.white
        );
    } catch (error) {
        console.log(`MONGODB server issue ${error}`.bgRed.white);
    }
};

module.exports = connectDB;
