/* eslint-disable no-unused-vars */
'use strict';
/** @type {import('sequelize-cli').Migration} */

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Blogs', [{
    name: 'John Doe',
    isBetaMember: false
  }], {});
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Blogs', null, {});

}
