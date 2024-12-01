// src/services/snippetService.ts

import { Snippet } from '../models/snippet';

export const SnippetService = {

  async getAllSnippets() {
    try {
      const snippets = await Snippet.findAll();
      return snippets;
    } catch (error: any) {
      console.error('Error fetching snippets:', error);
      throw new Error(`Error fetching snippets: ${error.message}`);
    }
  },

  async getSnippetById(id: any) {
    try {
      const snippet = await Snippet.findByPk(id);
      if (!snippet) {
        throw new Error('Snippet not found');
      }
      return snippet;
    } catch (error: any) {
      console.error('Error fetching snippet:', error);
      throw new Error(`Error fetching snippet: ${error.message}`);
    }
  },

  async getSnippetByUser(userId: any) {
    try {
      console.log('userId:', userId);
      const snippets = await Snippet.findAll({
        where: { userId },
      })
      return snippets;
    } catch (error: any) {
      console.error('Error fetching snippets:', error);
      throw new Error(`Error fetching snippets: ${error.message}`);
    }
  },

  async createSnippet(req: any) {
    try {
      const userId = req.user.userId; 
      const snippetData = { ...req.body, userId }; 
      const snippet = await Snippet.create(snippetData);
      return snippet;
    } catch (error: any) {
      console.error('Error creating snippet:', error);
      throw new Error(`Error creating snippet: ${error.message}`);
    }
  },

  async editSnippet(req: any) {
    try {
      const snippetId = req.params.id;
      const snippetData = req.body;
      const snippet = await Snippet.findByPk(snippetId);
      if (!snippet) {
        throw new Error('Snippet not found');
      }
      await snippet.update(snippetData);

    } catch (error: any) {
      console.error('Error editing snippet:', error);
      throw new Error(`Error editing snippet: ${error.message}`);
    }
  },

  async deleteSnippet(req: any) {
    try {
      const snippetId = req.params.id;
      const snippet = await Snippet.findByPk(snippetId);
      if (!snippet) {
        throw new Error('Snippet not found');
      }
      await snippet.destroy();
    } catch (error: any) {
      console.error('Error deleting snippet:', error);
      throw new Error(`Error deleting snippet: ${error.message}`);
    }
  }
};
