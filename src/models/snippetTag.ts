import { DataTypes, Model, Association } from 'sequelize';
import sequelize from '../config/db';
import { Snippet } from './snippet';
import { Tag } from './tag';

// Define the SnippetTag model with explicit attributes
class SnippetTag extends Model {
  public snippetId!: number;
  public tagId!: number;

  // Optional: define class-level associations
  public static associations: {
    snippet: Association<SnippetTag, Snippet>;
    tag: Association<SnippetTag, Tag>;
  };
}

// Initialize the SnippetTag model with explicit attributes
SnippetTag.init(
  {
    snippetId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Snippet,
        key: 'id'
      }
    },
    tagId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Tag,
        key: 'id'
      }
    }
  },
  {
    sequelize,
    modelName: 'SnippetTag',
    tableName: 'snippet_tags',
    timestamps: false
  }
);

// Establish associations
function setupAssociations() {
  Snippet.belongsToMany(Tag, { 
    through: SnippetTag,
    foreignKey: 'snippetId',
    otherKey: 'tagId',
    as: 'tags'
  });

  Tag.belongsToMany(Snippet, { 
    through: SnippetTag,
    foreignKey: 'tagId',
    otherKey: 'snippetId',
    as: 'snippets'
  });
}

// Call the association setup
setupAssociations();

export { SnippetTag };