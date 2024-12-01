// src/routes/snippetRoutes.ts

import express from 'express';
import { getAllSnippets, createSnippet, editSnippet, getSnippetById, getSnippetByUser, deleteSnippet } from '../controllers/snippetController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/', authMiddleware, getAllSnippets);
router.get('/byId/:id', authMiddleware, getSnippetById);
router.get('/user', authMiddleware, getSnippetByUser);
router.post('/', authMiddleware, createSnippet);  
router.put('/:id', authMiddleware, editSnippet);  
router.delete('/:id', authMiddleware, deleteSnippet);

export { router as snippetRoutes };
