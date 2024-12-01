import { User } from '../models/user'; 
import bcrypt from 'bcryptjs';

// Get user profile service
export const getUserProfileService = async (req: any) => {
  const userId = req.user.userId;  // Extracted from JWT token by the middleware
  console.log('userid',userId);
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

// Update user profile service
export const updateUserProfileService = async (req: any) => {
  const userId = req.user.userId;
  const { username, email } = req.body;

  // Fetch the user from the database
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error('User not found');
  }

  // Update only the fields provided in the request body
  if (username !== undefined) {
    user.username = username;
  }
  if (email !== undefined) {
    user.email = email;
  }

  // Save the updated user to the database
  await user.save();

  return user;
};

// Change password service
export const changePasswordService = async (req: any) => {
  const userId = req.user.userId;
  const { oldPassword, newPassword } = req.body;

  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error('User not found');
  }

  // Compare old password
  const isPasswordValid = await bcrypt.compare(oldPassword, user.passwordHash);
  if (!isPasswordValid) {
    throw new Error('Old password is incorrect');
  }

  // Update password
  const hashedNewPassword = await bcrypt.hash(newPassword, 10);
  user.passwordHash = hashedNewPassword;
  await user.save();

  return { message: 'Password changed successfully' };
};

// Delete user account service
export const deleteUserService = async (req: any) => {
  const userId = req.user.userId;
  const user = await User.findByPk(userId);
  console.log('user',user?.dataValues);
  if (!user) {
    throw new Error('User not found');
  }

  user.isDeleted = true;
  await user.save();

  return { message: 'Account deleted successfully' };
};
