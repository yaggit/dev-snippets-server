// src/models/tag.ts

import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

class Tag extends Model {
  public id!: number;
  public name!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'Tag',
    tableName: 'tags',
  }
);

export { Tag };
