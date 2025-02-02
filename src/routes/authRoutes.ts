import express from 'express';
import { signup, login, refreshToken, logout } from '../controllers/authController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/signup', signup);

router.post('/login', login);

router.post('/refresh-token', refreshToken);

router.post('/logout', logout);

router.get('/profile', authMiddleware, (req, res) => {
    const user = (req as any).user;
    res.status(200).json(user);
});

export { router as authRoutes };
