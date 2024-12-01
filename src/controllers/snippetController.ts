// src/controllers/snippetController.ts

import { Request, Response } from 'express';
import { SnippetService } from '../services/snippetService';

export const getAllSnippets = async (req: Request, res: Response) => {
  try {
    const snippets = await SnippetService.getAllSnippets();
    res.json(snippets);
  } catch (err) {
    console.error('Error fetching snippets:', err);
    res.status(500).json({ message: 'Error fetching snippets' });
  }
};

export const getSnippetById = async (req: Request, res: Response) => {
  try {
    const snippet = await SnippetService.getSnippetById(req.params.id);
    res.json(snippet);
  } catch (err) {
    console.error('Error fetching snippet:', err);
    res.status(500).json({ message: 'Error fetching snippet' });
  }
};

export const getSnippetByUser = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.userId;
    const snippets = await SnippetService.getSnippetByUser(userId);
    res.json(snippets);
  } catch (err) {
    console.error('Error fetching snippets:', err);
    res.status(500).json({ message: 'Error fetching snippets', error: err });
  }
}

export const createSnippet = async (req: Request, res: Response) => {
  try {
    const snippet = await SnippetService.createSnippet(req);
    res.status(201).json(snippet);
  } catch (err) {
    console.error('Error creating snippet:', err);
    res.status(500).json({ message: 'Error creating snippet', error: err });
  }
};

export const editSnippet = async (req: Request, res: Response) => {
  try {
    await SnippetService.editSnippet(req);
    res.status(200).json({ message: 'Snippet updated successfully' });
  } catch (err) {
    console.error('Error updating snippet:', err);
    res.status(500).json({ message: 'Error updating snippet', error: err });
  }
};

export const deleteSnippet = async (req: Request, res: Response) => {
  try {
    await SnippetService.deleteSnippet(req);
    res.status(200).json({ message: 'Snippet deleted successfully' });
  } catch (err) {
    console.error('Error deleting snippet:', err);
    res.status(500).json({ message: 'Error deleting snippet', error: err });
  }
};
