import { Comment } from "../models/comment";

export const CommentService = {
  async getAllComments() {
    return await Comment.findAll();
  },

  async createComment(commentData: any) {
    const comment = await Comment.create(commentData);
    return comment;
  },
};