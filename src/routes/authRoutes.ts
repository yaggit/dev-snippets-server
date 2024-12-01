import express from 'express';
import { signup, login, refreshToken } from '../controllers/authController';

const router = express.Router();

router.post('/signup', signup);

router.post('/login', login);

router.post('/refresh-token', refreshToken);

export { router as authRoutes };
