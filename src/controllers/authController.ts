import { Request, Response } from 'express';
import { signupService, loginService, refreshTokenService } from '../services/authService';

// Signup controller
export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
    const userData = await signupService(req.body);
    res.status(201).json(userData);  // return user data and token
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Login controller
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const loginData = await loginService(req.body);
    res.status(200).json(loginData);  // return token
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};

// Refresh Token controller
export const refreshToken = async (req: Request, res: Response): Promise<void> => {
  try {
    const newToken = await refreshTokenService(req.body.refreshToken);
    res.status(200).json({ token: newToken });
  } catch (error: any) {
    res.status(403).json({ message: 'Invalid refresh token' });
  }
};
