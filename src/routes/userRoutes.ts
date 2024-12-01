import express from 'express';
import { getUserProfile, updateUserProfile, changePassword, deleteUser } from '../controllers/userController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

// Get the currently authenticated user's profile
router.get('/me', authMiddleware, getUserProfile);

// Update the authenticated user's profile
router.put('/me', authMiddleware, updateUserProfile);

// Change the authenticated user's password
router.post('/changePassword', authMiddleware, changePassword);

// Delete the authenticated user's account
router.delete('/me', authMiddleware, deleteUser);

export { router as userRoutes };
