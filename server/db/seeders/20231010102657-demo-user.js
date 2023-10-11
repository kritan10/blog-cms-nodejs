/* eslint-disable no-unused-vars */
'use strict';
/** @type {import('sequelize-cli').Migration} */

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Users', [{
    name: 'John Doe',
    isBetaMember: false
  }], {});
}

export async function down(queryInterface, Sequelize) {
  /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('Users', null, {});
   */
  await queryInterface.bulkDelete('Users', null, {});
}
