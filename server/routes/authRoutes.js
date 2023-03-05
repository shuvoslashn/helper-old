import express from 'express';
import authController from '../controllers/authController.js';
import checkIsUserAuthenticated from '../middlewares/authMiddleware.js';
const router = express.Router();

// Register Route
router.post('/users/register', authController.userRegistration);

// Login Route
router.post('/users/login', authController.userLogin);

// Change Password Route
router.post(
    '/change-password',
    checkIsUserAuthenticated,
    authController.changePassword
);

export default router;
