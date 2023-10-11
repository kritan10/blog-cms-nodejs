'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});

    const tags = [
      { name: "Blogging" },
      { name: "Writing" },
      { name: "Content" },
      { name: "Inspiration" },
      { name: "Tips" },
      { name: "Opinions" },
      { name: "Ideas" },
      { name: "Stories" },
      { name: "Trends" },
      { name: "Advice" },
    ];

    await queryInterface.bulkInsert('Tags', tags, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  }
}
