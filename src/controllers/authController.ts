import { Request, Response } from 'express';
import { signupService, loginService, refreshTokenService } from '../services/authService';
import { generateToken } from '../utils/jwtUtils';

// Signup controller
export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
    const { user } = await signupService(req.body);
    const token = generateToken(user.id);

    // Set cookie with HttpOnly and Secure flags
    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    res.status(201).json({ message: 'Signup successful', user });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};


// Login controller
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await loginService(req.body);
    const token = generateToken(user.id);

    // Set cookie with HttpOnly and Secure flags
    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    res.status(200).json({ message: 'Login successful' });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};

export const logout = (req: Request, res: Response): void => {
  res.clearCookie('auth_token', {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  });
  res.status(200).json({ message: 'Logout successful' });
};

// Refresh Token controller
export const refreshToken = async (req: Request, res: Response): Promise<void> => {
  try {
    const newToken = await refreshTokenService(req.body.refreshToken);
    res.status(200).json({ token: newToken });
  } catch (error: any) {
    res.status(403).json({ message: 'Invalid refresh token', error });
  }
};
