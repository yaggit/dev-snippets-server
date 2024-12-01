// src/models/snippetVersion.ts

import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';
import { Snippet } from './snippet';

class SnippetVersion extends Model {
  public id!: number;
  public version!: number;
  public snippetId!: number;
  public code!: string;
  public description!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

SnippetVersion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    version: {
      type: DataTypes.INTEGER,
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
    code: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'SnippetVersion',
    tableName: 'snippet_versions',
  }
);

export { SnippetVersion };
