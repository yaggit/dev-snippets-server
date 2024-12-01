import { SnippetVersion } from "../models/snippetVersion";

export const SnippetVersionService = {
  async getAllSnippetVersions() {
    return await SnippetVersion.findAll();
  },

  async createSnippetVersion(snippetVersionData: any) {
    const snippetVersion = await SnippetVersion.create(snippetVersionData);
    return snippetVersion;
  },
};