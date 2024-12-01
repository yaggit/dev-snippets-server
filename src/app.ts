// src/app.ts

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { snippetRoutes } from './routes/snippetRoutes';
import { authRoutes } from './routes/authRoutes';
import { userRoutes } from './routes/userRoutes';
import { errorHandler } from './middlewares/errorMiddleware';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/snippets', snippetRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;
