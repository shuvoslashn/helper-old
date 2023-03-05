import authModel from '../models/authModel.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
const saltRounds = 10;

dotenv.config();

class authController {
    // User Registration Method
    static userRegistration = async (req, res) => {
        const { name, email, password } = req.body;

        try {
            if (!name || !email || !password) {
                return res.status(400).json({
                    status: 'error',
                    message: 'All fields are required',
                });
            }

            const existingUser = await authModel.findOne({ email: email });
            if (existingUser) {
                return res.status(400).json({
                    status: 'error',
                    message: 'User already exists',
                });
            }

            const hashedPassword = await bcryptjs.hash(password, saltRounds);

            const newUser = authModel({
                name,
                email,
                password: hashedPassword,
            });

            const savedUser = await newUser.save();

            return res.status(201).json({
                status: 'success',
                message: 'Registration successful',
                user: savedUser,
            });
        } catch (error) {
            return res.status(400).json({
                status: 'error',
                message: error.message,
            });
        }
    };

    // User Login Method
    static userLogin = async (req, res) => {
        const { email, password } = req.body;
        try {
            if (!email || !password) {
                return res.status(400).json({
                    message: 'All fields are required',
                });
            }

            const isUser = await authModel.findOne({ email: email });
            if (isUser) {
                if (
                    email === isUser.email &&
                    (await bcryptjs.compare(password, isUser.password))
                ) {
                    // Generate Token
                    const token = jwt.sign(
                        { userID: isUser._id },
                        process.env.SECRET_KEY,
                        {
                            expiresIn: '2d',
                        }
                    );
                    return res.status(200).json({
                        message: 'Login Successful',
                        token,
                    });
                } else {
                    return res.status(400).json({
                        message: 'invalid information',
                    });
                }
            } else {
                return res.status(400).json({
                    message: 'user not registered',
                });
            }
        } catch (error) {
            return res.status(400).json({
                status: 'error',
                message: error.message,
            });
        }
    };

    // Change Password
    static changePassword = async (req, res) => {
        const { newPassword, confirmPassword } = req.body;
        try {
            if (!newPassword || !confirmPassword) {
                return res
                    .status(400)
                    .json({ message: 'all fields are required' });
            }

            if (newPassword === confirmPassword) {
                const hashedPassword = await bcryptjs.hash(
                    newPassword,
                    saltRounds
                );
                await authModel.findByIdAndUpdate(req.user._id, {
                    password: hashedPassword,
                });
                return res.status(201).json({
                    message: 'password changed successfully',
                });
            } else {
                return res.status(400).json({
                    message: 'new password and confirm password does not match',
                });
            }
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };
}

export default authController;
