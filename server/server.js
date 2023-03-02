const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// config dotenv
dotenv.config();

// mongodb connection
connectDB();

// rest object
const app = express();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors);

// routes
app.use('/api/vi/user', require('./routes/userRoutes'));

// PORT
const PORT = process.env.PORT || 8080;

// Server listening
app.listen(PORT, () => {
    console.log(` Server running at ${PORT} `.bgGreen);
});
