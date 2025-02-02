// src/middlewares/authMiddleware.ts

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.cookies.auth_token; // Retrieve token from cookies

  if (!token) {
    res.status(401).json({ message: 'No token provided', error: 'Unauthorized' });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    (req as any).user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ message: 'Invalid or expired token', error: err });
  }
};
