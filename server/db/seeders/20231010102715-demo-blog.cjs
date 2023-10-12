/* eslint-disable no-unused-vars */
'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Blogs', null, {});

    const blogs = [
      {
        title: "lorem culpa adipisicing ad irure nostrud laboris nostrud ipsum labore.",
        content: "Aute reprehenderit officia quis pariatur est. Proident adipisicing et dolor anim culpa laboris esse. Do exercitation veniam sint reprehenderit occaecat est mollit. Eiusmod consectetur minim cupidatat fugiat. Magna excepteur exercitation nulla duis qui reprehenderit consectetur eiusmod esse incididunt. Aute proident adipisicing anim officia aliquip amet ut qui qui duis culpa cupidatat eu. Proident ut laboris voluptate enim magna ullamco officia ullamco consectetur. Duis laborum consequat magna consequat. Anim dolore eiusmod elit aliquip cillum culpa cillum minim qui tempor. Voluptate commodo duis Lorem velit. Voluptate irure non in anim. Consequat tempor est amet id aute sunt esse mollit labore commodo. Sint qui in fugiat culpa. Officia non sint occaecat proident officia veniam qui aliquip adipisicing. Labore consequat sint ut tempor.",
        image: "https://unsplash.com/photos/a-bookshelf-filled-with-books-and-a-clock-eciaAcxbMIY",
        createdBy: "c942653b-f5ea-45bb-9b50-54c7dbfef1c8",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
      },
      {
        title: "lorem culpa adipisicing ad irure nostrud laboris nostrud ipsum labore.",
        content: "Aute reprehenderit officia quis pariatur est. Proident adipisicing et dolor anim culpa laboris esse. Do exercitation veniam sint reprehenderit occaecat est mollit. Eiusmod consectetur minim cupidatat fugiat. Magna excepteur exercitation nulla duis qui reprehenderit consectetur eiusmod esse incididunt. Aute proident adipisicing anim officia aliquip amet ut qui qui duis culpa cupidatat eu. Proident ut laboris voluptate enim magna ullamco officia ullamco consectetur. Duis laborum consequat magna consequat. Anim dolore eiusmod elit aliquip cillum culpa cillum minim qui tempor. Voluptate commodo duis Lorem velit. Voluptate irure non in anim. Consequat tempor est amet id aute sunt esse mollit labore commodo. Sint qui in fugiat culpa. Officia non sint occaecat proident officia veniam qui aliquip adipisicing. Labore consequat sint ut tempor.",
        image: "https://unsplash.com/photos/obyYZVKwCNI",
        createdBy: "c942653b-f5ea-45bb-9b50-54c7dbfef1c8",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
      },
      {
        title: "lorem culpa adipisicing ad irure nostrud laboris nostrud ipsum labore.",
        content: "Aute reprehenderit officia quis pariatur est. Proident adipisicing et dolor anim culpa laboris esse. Do exercitation veniam sint reprehenderit occaecat est mollit. Eiusmod consectetur minim cupidatat fugiat. Magna excepteur exercitation nulla duis qui reprehenderit consectetur eiusmod esse incididunt. Aute proident adipisicing anim officia aliquip amet ut qui qui duis culpa cupidatat eu. Proident ut laboris voluptate enim magna ullamco officia ullamco consectetur. Duis laborum consequat magna consequat. Anim dolore eiusmod elit aliquip cillum culpa cillum minim qui tempor. Voluptate commodo duis Lorem velit. Voluptate irure non in anim. Consequat tempor est amet id aute sunt esse mollit labore commodo. Sint qui in fugiat culpa. Officia non sint occaecat proident officia veniam qui aliquip adipisicing. Labore consequat sint ut tempor.",
        image: "https://unsplash.com/photos/fIq0tET6llw",
        createdBy: "c942653b-f5ea-45bb-9b50-54c7dbfef1c8",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
      },
      {
        title: "lorem culpa adipisicing ad irure nostrud laboris nostrud ipsum labore.",
        content: "Aute reprehenderit officia quis pariatur est. Proident adipisicing et dolor anim culpa laboris esse. Do exercitation veniam sint reprehenderit occaecat est mollit. Eiusmod consectetur minim cupidatat fugiat. Magna excepteur exercitation nulla duis qui reprehenderit consectetur eiusmod esse incididunt. Aute proident adipisicing anim officia aliquip amet ut qui qui duis culpa cupidatat eu. Proident ut laboris voluptate enim magna ullamco officia ullamco consectetur. Duis laborum consequat magna consequat. Anim dolore eiusmod elit aliquip cillum culpa cillum minim qui tempor. Voluptate commodo duis Lorem velit. Voluptate irure non in anim. Consequat tempor est amet id aute sunt esse mollit labore commodo. Sint qui in fugiat culpa. Officia non sint occaecat proident officia veniam qui aliquip adipisicing. Labore consequat sint ut tempor.",
        image: "https://unsplash.com/photos/l3N9Q27zULw",
        createdBy: "68f3d605-ada7-4807-bc3d-05968574fb2e",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
      },
      {
        title: "lorem culpa adipisicing ad irure nostrud laboris nostrud ipsum labore.",
        content: "Aute reprehenderit officia quis pariatur est. Proident adipisicing et dolor anim culpa laboris esse. Do exercitation veniam sint reprehenderit occaecat est mollit. Eiusmod consectetur minim cupidatat fugiat. Magna excepteur exercitation nulla duis qui reprehenderit consectetur eiusmod esse incididunt. Aute proident adipisicing anim officia aliquip amet ut qui qui duis culpa cupidatat eu. Proident ut laboris voluptate enim magna ullamco officia ullamco consectetur. Duis laborum consequat magna consequat. Anim dolore eiusmod elit aliquip cillum culpa cillum minim qui tempor. Voluptate commodo duis Lorem velit. Voluptate irure non in anim. Consequat tempor est amet id aute sunt esse mollit labore commodo. Sint qui in fugiat culpa. Officia non sint occaecat proident officia veniam qui aliquip adipisicing. Labore consequat sint ut tempor.",
        image: "https://unsplash.com/photos/sf_1ZDA1YFw",
        createdBy: "ab751785-67ee-47ce-af2b-940253e03b97",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
      },
      {
        title: "lorem culpa adipisicing ad irure nostrud laboris nostrud ipsum labore.",
        content: "Aute reprehenderit officia quis pariatur est. Proident adipisicing et dolor anim culpa laboris esse. Do exercitation veniam sint reprehenderit occaecat est mollit. Eiusmod consectetur minim cupidatat fugiat. Magna excepteur exercitation nulla duis qui reprehenderit consectetur eiusmod esse incididunt. Aute proident adipisicing anim officia aliquip amet ut qui qui duis culpa cupidatat eu. Proident ut laboris voluptate enim magna ullamco officia ullamco consectetur. Duis laborum consequat magna consequat. Anim dolore eiusmod elit aliquip cillum culpa cillum minim qui tempor. Voluptate commodo duis Lorem velit. Voluptate irure non in anim. Consequat tempor est amet id aute sunt esse mollit labore commodo. Sint qui in fugiat culpa. Officia non sint occaecat proident officia veniam qui aliquip adipisicing. Labore consequat sint ut tempor.",
        image: "https://unsplash.com/photos/UBhpOIHnazM",
        createdBy: "ab751785-67ee-47ce-af2b-940253e03b97",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
      },
      {
        title: "lorem culpa adipisicing ad irure nostrud laboris nostrud ipsum labore.",
        content: "Aute reprehenderit officia quis pariatur est. Proident adipisicing et dolor anim culpa laboris esse. Do exercitation veniam sint reprehenderit occaecat est mollit. Eiusmod consectetur minim cupidatat fugiat. Magna excepteur exercitation nulla duis qui reprehenderit consectetur eiusmod esse incididunt. Aute proident adipisicing anim officia aliquip amet ut qui qui duis culpa cupidatat eu. Proident ut laboris voluptate enim magna ullamco officia ullamco consectetur. Duis laborum consequat magna consequat. Anim dolore eiusmod elit aliquip cillum culpa cillum minim qui tempor. Voluptate commodo duis Lorem velit. Voluptate irure non in anim. Consequat tempor est amet id aute sunt esse mollit labore commodo. Sint qui in fugiat culpa. Officia non sint occaecat proident officia veniam qui aliquip adipisicing. Labore consequat sint ut tempor.",
        image: "https://unsplash.com/photos/a-bookshelf-filled-with-books-and-a-clock-eciaAcxbMIY",
        createdBy: "6d0040c2-a712-4e34-ab8c-1679cd78c8fb",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
      },
      {
        title: "lorem culpa adipisicing ad irure nostrud laboris nostrud ipsum labore.",
        content: "Aute reprehenderit officia quis pariatur est. Proident adipisicing et dolor anim culpa laboris esse. Do exercitation veniam sint reprehenderit occaecat est mollit. Eiusmod consectetur minim cupidatat fugiat. Magna excepteur exercitation nulla duis qui reprehenderit consectetur eiusmod esse incididunt. Aute proident adipisicing anim officia aliquip amet ut qui qui duis culpa cupidatat eu. Proident ut laboris voluptate enim magna ullamco officia ullamco consectetur. Duis laborum consequat magna consequat. Anim dolore eiusmod elit aliquip cillum culpa cillum minim qui tempor. Voluptate commodo duis Lorem velit. Voluptate irure non in anim. Consequat tempor est amet id aute sunt esse mollit labore commodo. Sint qui in fugiat culpa. Officia non sint occaecat proident officia veniam qui aliquip adipisicing. Labore consequat sint ut tempor.",
        image: "https://unsplash.com/photos/a-bookshelf-filled-with-books-and-a-clock-eciaAcxbMIY",
        createdBy: "243e6390-5072-4fc1-b650-8ae1fc2339d7",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
      },
      {
        title: "lorem culpa adipisicing ad irure nostrud laboris nostrud ipsum labore.",
        content: "Aute reprehenderit officia quis pariatur est. Proident adipisicing et dolor anim culpa laboris esse. Do exercitation veniam sint reprehenderit occaecat est mollit. Eiusmod consectetur minim cupidatat fugiat. Magna excepteur exercitation nulla duis qui reprehenderit consectetur eiusmod esse incididunt. Aute proident adipisicing anim officia aliquip amet ut qui qui duis culpa cupidatat eu. Proident ut laboris voluptate enim magna ullamco officia ullamco consectetur. Duis laborum consequat magna consequat. Anim dolore eiusmod elit aliquip cillum culpa cillum minim qui tempor. Voluptate commodo duis Lorem velit. Voluptate irure non in anim. Consequat tempor est amet id aute sunt esse mollit labore commodo. Sint qui in fugiat culpa. Officia non sint occaecat proident officia veniam qui aliquip adipisicing. Labore consequat sint ut tempor.",
        image: "https://unsplash.com/photos/a-bookshelf-filled-with-books-and-a-clock-eciaAcxbMIY",
        createdBy: "c60b221f-8208-417f-a982-652cab0e7fb2",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
      },
      {
        title: "lorem culpa adipisicing ad irure nostrud laboris nostrud ipsum labore.",
        content: "Aute reprehenderit officia quis pariatur est. Proident adipisicing et dolor anim culpa laboris esse. Do exercitation veniam sint reprehenderit occaecat est mollit. Eiusmod consectetur minim cupidatat fugiat. Magna excepteur exercitation nulla duis qui reprehenderit consectetur eiusmod esse incididunt. Aute proident adipisicing anim officia aliquip amet ut qui qui duis culpa cupidatat eu. Proident ut laboris voluptate enim magna ullamco officia ullamco consectetur. Duis laborum consequat magna consequat. Anim dolore eiusmod elit aliquip cillum culpa cillum minim qui tempor. Voluptate commodo duis Lorem velit. Voluptate irure non in anim. Consequat tempor est amet id aute sunt esse mollit labore commodo. Sint qui in fugiat culpa. Officia non sint occaecat proident officia veniam qui aliquip adipisicing. Labore consequat sint ut tempor.",
        image: "https://unsplash.com/photos/a-bookshelf-filled-with-books-and-a-clock-eciaAcxbMIY",
        createdBy: "9a9c17b7-24ef-4009-a092-24ca10f814de",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
      },
      {
        title: "lorem culpa adipisicing ad irure nostrud laboris nostrud ipsum labore.",
        content: "Aute reprehenderit officia quis pariatur est. Proident adipisicing et dolor anim culpa laboris esse. Do exercitation veniam sint reprehenderit occaecat est mollit. Eiusmod consectetur minim cupidatat fugiat. Magna excepteur exercitation nulla duis qui reprehenderit consectetur eiusmod esse incididunt. Aute proident adipisicing anim officia aliquip amet ut qui qui duis culpa cupidatat eu. Proident ut laboris voluptate enim magna ullamco officia ullamco consectetur. Duis laborum consequat magna consequat. Anim dolore eiusmod elit aliquip cillum culpa cillum minim qui tempor. Voluptate commodo duis Lorem velit. Voluptate irure non in anim. Consequat tempor est amet id aute sunt esse mollit labore commodo. Sint qui in fugiat culpa. Officia non sint occaecat proident officia veniam qui aliquip adipisicing. Labore consequat sint ut tempor.",
        image: "https://unsplash.com/photos/a-bookshelf-filled-with-books-and-a-clock-eciaAcxbMIY",
        createdBy: "9a9c17b7-24ef-4009-a092-24ca10f814de",
        createdAt: new Date(),
        deletedAt: null,
        updatedAt: null,
      }
    ]

    await queryInterface.bulkInsert('Blogs', blogs, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Blogs', null, {});
  }
}
