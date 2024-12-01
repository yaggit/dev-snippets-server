import { Request, Response } from 'express';
import { getUserProfileService, updateUserProfileService, changePasswordService, deleteUserService } from '../services/userService';

// Get user profile
export const getUserProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const userProfile = await getUserProfileService(req);
    res.status(200).json(userProfile);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update user profile
export const updateUserProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedProfile = await updateUserProfileService(req);
    res.status(200).json(updatedProfile);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Change user password
export const changePassword = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await changePasswordService(req);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Delete user account
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await deleteUserService(req);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
