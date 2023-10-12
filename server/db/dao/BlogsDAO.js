/* eslint-disable no-unused-vars */
import connection from '../connection.js';
import { getTagsForInsert } from '../utils/getTagIdByName.js';
import commitElseRollback from '../utils/commitElseRollback.js';

function getAllBlogs(queryOptions) {
	return new Promise((resolve, reject) => {
		const tags = queryOptions.tags;

		let tagFilterStatement = '';
		let innerJoinStatement = '';

		// filter by tag option enabled if tags is not empty
		if (tags !== undefined && tags.length >= 1) {
			// join blogtags and tags
			innerJoinStatement += ' INNER JOIN BlogTags ON BlogTags.blog_id = Blogs.id ' + ' INNER JOIN Tags on BlogTags.tag_id = Tags.id ';

			/** 
                add each tag in a OR check statement
                example tags = ['writing', 'blogging', ...] 
                sql = WHERE tags.name = writing OR tags.name = blogging OR ...
                converted to lowercase before checking :)
             **/
			tagFilterStatement += ' AND (';
			tags.forEach((t) => {
				tagFilterStatement += `LOWER(Tags.name) = LOWER('${t}') OR`;
			});

			// to fix trailing OR operator
			tagFilterStatement += ' FALSE) ';
		}

		const statement =
			'SELECT Blogs.id, title, content, image, createdAt, createdBy, deletedAt FROM Blogs ' +
			innerJoinStatement +
			'WHERE Blogs.deletedAt IS NULL ' +
			tagFilterStatement +
			'LIMIT ?, ? ;';

		// connection.prepare(statement, (err, st) => {
		//     st.execute([queryOptions.offset, queryOptions.limit], (err, result, fields) => {
		//         if (err) return reject(err)
		//         console.log(`--- SELECT // ${result.length} ROWS SELECTED ---`);
		//         console.log(result);
		//         resolve(result)
		//     })
		// })

		connection.query(statement, [queryOptions.offset, queryOptions.limit], (err, result, fields) => {
			if (err) return reject(err);
			console.log(`--- SELECT // ${result.length} ROWS SELECTED ---`);
			resolve(result);
		});
	});
}

function getBlogTags(id) {
	return new Promise((resolve, reject) => {
		connection.execute('SELECT * FROM BlogTags INNER JOIN Tags ON Tags.id = BlogTags.tag_id WHERE blog_id=?;', [id], (err, result, fields) => {
			if (err) return reject(err);
			console.log(`--- SELECT // ID = ${id} // ${result[0]} ---`);
			resolve(result);
		});
	});
}

function getBlogById(id) {
	return new Promise((resolve, reject) => {
		connection.execute('SELECT * FROM Blogs WHERE id=? AND deletedAt IS NULL;', [id], (err, result, fields) => {
			if (err) return reject(err);
			console.log(`--- SELECT // ID = ${id} // ${result[0]} ---`);
			resolve(result[0]);
		});
	});
}

function createBlog(blog, user = { id: '5f49191c-25bd-4a6f-abca-55c0ef8a7215' }) {
	return new Promise((resolve, reject) => {
		let blogInsertId;
		const sqlBlogInsert = 'INSERT INTO Blogs(title, content, image, createdBy, createdAt) VALUES (?,?,?,?,?);';
		const insertsBlogInsert = [blog.title, blog.content, blog.image, user.id, new Date()];

		// using transaction because bridge table
		connection.beginTransaction((err) => {
			if (err) return reject(err);

			// first, insert blog in blogs table
			connection.query(sqlBlogInsert, insertsBlogInsert, (err, result, fields) => {
				if (err) connection.rollback((err) => reject(err));
				blogInsertId = result.insertId;
				console.log(`--- INSERT // insertId=${result.insertId} //${result.affectedRows} ROWS INSERTED ---`);

				// refer to https://github.com/mysqljs/mysql#escaping-query-values
				const tags = getTagsForInsert(blog.tags, blogInsertId);

				// end transaction if no tags
				if (tags.length === 0) return commitElseRollback(connection, resolve, reject, blogInsertId);

				// bulk insert tags in bridge table
				const sqlBridgeInsert = 'INSERT INTO BlogTags(blog_id, tag_id) VALUES ?;';
				connection.query(sqlBridgeInsert, [tags], (err, result, fields) => {
					if (err) connection.rollback((err) => reject(err));
					console.log(`--- INSERT // ${result.affectedRows} ROWS INSERTED ---`);
					return commitElseRollback(connection, resolve, reject, blogInsertId);
				});
			});
		});
	});
}

function updateBlog(id, blog) {
	return new Promise((resolve, reject) => {
		const statement = 'UPDATE Blogs SET title=?, content=?, image=?, updatedAt=? WHERE id=?;';
		const values = [blog.title, blog.content, blog.image, new Date(), id];

		connection.execute(statement, values, (err, result, fields) => {
			if (err) return reject(err);
			console.log(`--- UPDATE // ID = ${id} // ${result.affectedRows} ROWS UPDATED ---`);
			resolve(result.affectedRows >= 1 ? true : false);
		});
	});
}

function deleteBlog(id) {
	return new Promise((resolve, reject) => {
		connection.execute('UPDATE Blogs SET deletedAt=? WHERE id=?;', [new Date(), id], (err, result, fields) => {
			if (err) return reject(err);
			console.log(`--- SOFT DELETE // ID = ${id} // ${result.affectedRows} ROWS DELETED ---`);
			resolve(result.affectedRows >= 1 ? true : false);
		});
	});
}

export { createBlog, getAllBlogs, deleteBlog, updateBlog, getBlogById };
