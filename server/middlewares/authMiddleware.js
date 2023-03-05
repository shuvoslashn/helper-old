import jwt from 'jsonwebtoken';
import authModel from '../models/authModel.js';
import dotenv from 'dotenv';
dotenv.config();

const checkIsUserAuthenticated = async (req, res, next) => {
    let token;
    const { authorization } = req.headers;
    if (authorization && authorization.startsWith('Bearer')) {
        try {
            token = authorization.split(' ')[1];
            // verify token
            const { userID } = jwt.verify(token, process.env.SECRET_KEY);
            // Get User from Token
            req.user = await authModel.findById(userID).select('--password');
            next();
        } catch (error) {
            return res.status(401).json({ message: 'unAuthorized User' });
        }
    } else {
        return res.status(401).json({ message: 'unAuthorized User' });
    }
};

export default checkIsUserAuthenticated;
