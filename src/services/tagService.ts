import { Tag } from "../models/tag";

export const TagService = {
  async getAllTags() {
    return await Tag.findAll();
  },

  async createTag(tagData: any) {
    const tag = await Tag.create(tagData);
    return tag;
  },
};