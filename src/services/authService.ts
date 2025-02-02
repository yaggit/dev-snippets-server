import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/user'; 
import { generateToken } from '../utils/jwtUtils';

// Signup service
export const signupService = async (userData: { username: string; email: string; password: string }) => {
  const { username, email, password } = userData;

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ username, email, passwordHash: hashedPassword });

  const token = generateToken(newUser.id);
  return { user: newUser };
};

// Login service
export const loginService = async (loginData: { email: string; password: string }) => {
  const { email, password } = loginData;

  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isValidPassword = await bcrypt.compare(password, user.passwordHash);
  if (!isValidPassword) {
    throw new Error('Invalid credentials');
  }

  const token = generateToken(user.id);
  return user;
};

export const refreshTokenService = async (refreshToken: string) => {
  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET as string);
    return generateToken((decoded as any).userId);
  } catch (err) {
    throw new Error('Invalid refresh token');
  }
};
