'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const blogTags = [
			{
				blog_id: 12,
				tag_id: 1,
			},
			{
				blog_id: 12,
				tag_id: 2,
			},
			{
				blog_id: 12,
				tag_id: 3,
			},
			{
				blog_id: 13,
				tag_id: 5,
			},
			{
				blog_id: 14,
				tag_id: 5,
			},
			{
				blog_id: 15,
				tag_id: 6,
			},
			{
				blog_id: 17,
				tag_id: 6,
			},
			{
				blog_id: 17,
				tag_id: 7,
			},
			{
				blog_id: 17,
				tag_id: 8,
			},
			{
				blog_id: 18,
				tag_id: 10,
			},
			{
				blog_id: 19,
				tag_id: 10,
			},
			{
				blog_id: 20,
				tag_id: 5,
			},
		];

		await queryInterface.bulkInsert('BlogTags', blogTags, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('BlogTags', null, {});
	},
};
