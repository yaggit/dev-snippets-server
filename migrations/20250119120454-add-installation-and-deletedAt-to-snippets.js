'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn('snippets', 'installation', {
      type: DataTypes.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('snippets', 'deletedAt', {
      type: DataTypes.DATE,
      allowNull: true,
    });

    await queryInterface.addColumn('snippets', 'version', {
      type: DataTypes.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('snippets', 'installation');
    await queryInterface.removeColumn('snippets', 'deletedAt');
    await queryInterface.removeColumn('snippets', 'version');
  }
};