import { SnippetTag } from "../models/snippetTag";

export const SnippetTagService = {
  async getAllSnippetTags() {
    return await SnippetTag.findAll();
  },

  async createSnippetTag(snippetTagData: any) {
    const snippetTag = await SnippetTag.create(snippetTagData);
    return snippetTag;
  },
};