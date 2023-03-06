import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
const app = express();

const PORT = process.env.PORT || 9000;

connectDB();
dotenv.config();

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// routes
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Api is running on http://localhost:${PORT}`);
});
