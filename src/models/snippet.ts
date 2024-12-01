// src/models/snippet.ts

import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';
import { User } from './user';

class Snippet extends Model {
  public id!: number;
  public title!: string;
  public code!: string;
  public description!: string;
  public language!: string;
  public userId!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Snippet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
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
    modelName: 'Snippet',
    tableName: 'snippets',
  }
);

export { Snippet };
