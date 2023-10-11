/* eslint-disable no-unused-vars */
'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Blogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      title: {
        type: Sequelize.STRING
      },

      content: {
        type: Sequelize.TEXT
      },

      image: {
        type: Sequelize.STRING
      },

      tags: {
        type: Sequelize.STRING,
      },

      createdBy: {
        type: Sequelize.UUID,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
    });

    // link users table 
    await queryInterface.sequelize
      .query(`ALTER TABLE Blogs 
            ADD FOREIGN KEY (createdBy) 
            REFERENCES Users (id)
            ON UPDATE CASCADE 
            ON DELETE SET NULL;
          `
      );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Blogs');
  }
}