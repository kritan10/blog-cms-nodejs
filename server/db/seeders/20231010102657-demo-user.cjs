/* eslint-disable no-unused-vars */
'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});

    await queryInterface.bulkInsert('Users', [
      {
        id: "c942653b-f5ea-45bb-9b50-54c7dbfef1c8",
        name: "Alice Smith",
        email: "alice.smith@email.com",
        password: "qwertyqwertyqwerty",
        role: "user",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
      },
      {
        id: "68f3d605-ada7-4807-bc3d-05968574fb2e",
        name: "Bob Johnson",
        email: "bob.johnson@email.com",
        password: "zxcvzxcvzxcvzxcv",
        role: "user",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
      },
      {
        id: "ab751785-67ee-47ce-af2b-940253e03b97",
        name: "Charlie Brown",
        email: "charlie.brown@email.com",
        password: "1234123412341234",
        role: "user",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
      },

      {
        id: "6d0040c2-a712-4e34-ab8c-1679cd78c8fb",
        name: "Alice Smith",
        email: "alice.smith@email.com",
        password: "qwertyqwertyqwerty",
        role: "user",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
      },
      {
        id: "243e6390-5072-4fc1-b650-8ae1fc2339d7",
        name: "Bob Johnson",
        email: "bob.johnson@email.com",
        password: "zxcvzxcvzxcvzxcv",
        role: "user",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
      },
      {
        id: "c60b221f-8208-417f-a982-652cab0e7fb2",
        name: "Charlie Brown",
        email: "charlie.brown@email.com",
        password: "1234123412341234",
        role: "admin",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
      },
      {
        id: "9a9c17b7-24ef-4009-a092-24ca10f814de",
        name: "David Miller",
        email: "david.miller@email.com",
        password: "asdfghasdfghasdfgh",
        role: "user",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
      },
      {
        id: "e65dd7d3-ad58-4d62-bd19-7737005c04c3",
        name: "Eva Davis",
        email: "eva.davis@email.com",
        password: "qazwsxqazwsxqazwsx",
        role: "admin",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
      },
      {
        id: "70a26c8a-a7bb-4763-873e-974f8d74a7be",
        name: "Frank White",
        email: "frank.white@email.com",
        password: "poiuytpoiuytpoiuyt",
        role: "user",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
      },
      {
        id: "2690590f-5966-4670-88d4-4d5b44c9ce12",
        name: "Grace Taylor",
        email: "grace.taylor@email.com",
        password: "mnbvcmnbvcmnbvc",
        role: "admin",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
      },
      {
        id: "6bbd656d-52fc-42f2-9342-ecce7cd2cc9c",
        name: "Henry Turner",
        email: "henry.turner@email.com",
        password: "lkjhglkjhglkjh",
        role: "user",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
      },
      {
        id: "df35892f-f51a-41a8-a24d-19b1fa52735c",
        name: "Ivy Clark",
        email: "ivy.clark@email.com",
        password: "098765098765",
        role: "admin",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
      },
      {
        id: "5f49191c-25bd-4a6f-abca-55c0ef8a7215",
        name: "Jackie Lewis",
        email: "jackie.lewis@email.com",
        password: "muffinmuffinmuffin",
        role: "user",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
      }
    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
}