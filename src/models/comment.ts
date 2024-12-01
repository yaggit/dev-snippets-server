// src/models/comment.ts

import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';
import { Snippet } from './snippet';
import { User } from './user';

class Comment extends Model {
  public id!: number;
  public content!: string;
  public snippetId!: number;
  public userId!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    snippetId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Snippet,
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Comment',
    tableName: 'comments',
  }
);

export { Comment };
