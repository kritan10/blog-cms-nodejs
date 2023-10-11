/* eslint-disable no-unused-vars */
'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BlogTags', {
      blog_id: {
        type: Sequelize.INTEGER,
      },
      tag_id: {
        type: Sequelize.INTEGER
      },
    });

    // link tags table
    await queryInterface.sequelize
      .query(`ALTER TABLE BlogTags 
            ADD FOREIGN KEY (blog_id) 
            REFERENCES Blogs (id)
            ON UPDATE CASCADE 
            ON DELETE CASCADE;
          `
      );

    // link tags table
    await queryInterface.sequelize
      .query(`ALTER TABLE BlogTags 
          ADD FOREIGN KEY (tag_id) 
          REFERENCES Tags (id)
          ON UPDATE CASCADE 
          ON DELETE CASCADE;
        `
      );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BlogTags');
  }
}