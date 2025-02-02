// src/app.ts

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { snippetRoutes } from './routes/snippetRoutes';
import { authRoutes } from './routes/authRoutes';
import { userRoutes } from './routes/userRoutes';
import { errorHandler } from './middlewares/errorMiddleware';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.REACT_APP_URL,
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    if (Object.keys(req.body).length) {
      console.log("Body:", req.body);
    }
    next();
  });

// Routes
app.use('/api/snippets', snippetRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorHandler);

export default app;
