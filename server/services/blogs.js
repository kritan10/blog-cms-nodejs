import { createBlog, getAllBlogs, deleteBlog, updateBlog, getBlogById } from '../db/dao/blogs.js';

async function listBlogsService(call, callback) {
	const { page, perPageCount, tags } = call.request;

	// page - offset
	const mPage = page ? page - 1 : 0;

	// perPageCount - number of results to return
	const mPerPageCount = perPageCount ? perPageCount : 5;

	// SELECT offset
	const offset = mPage * mPerPageCount;

	// number of results to be returned
	const limit = mPerPageCount;

	const blogs = await getAllBlogs({
		offset: offset,
		limit: limit,
		tags: tags,
	});

	const response = {
		page: page,
		count: blogs.length,
		blogs: blogs,
	};

	callback(null, response);
}

async function getBlogByIdService(call, callback) {
	const id = call.request.id;
	if (!id) return callback({ message: 'Invalid blog id' });

	const response = await getBlogById(id);
	if (!response) return callback({ message: `Blog of ${id} not found.` });

	return callback(null, response);
}

async function createBlogService(call, callback) {
	const { title, content, image, tags } = call.request;
	// check if blog title or blog content is falsy
	if (!content || !title) return callback({ message: 'Blog title or body not defined.' }, null);

	const blog = {
		title: title,
		content: content,
		image: image,
		tags: tags,
	};

	const createdBlogId = await createBlog(blog);
	if (!createdBlogId) return callback({ message: 'Blog not created.', }, null);

	const response = await getBlogById(createdBlogId);
	callback(null, response);
}

async function updateBlogService(call, callback) {
	const id = call.request.id;
	if (!id) return callback({ message: 'Blog id not defined.' }, null);

	const doesBlogExist = await getBlogById(id);
	if (!doesBlogExist) return callback({ message: 'Blog not found.' }, null);

	const { title, content, image } = call.request;
	if (!content || !title) return callback({ message: 'Blog title or body not defined.' }, null);

	const blog = {
		title: title,
		content: content,
		image: image,
	};

	await updateBlog(id, blog);
	const response = await getBlogById(id);

	callback(null, response);
}

async function deleteBlogService(call, callback) {
	const id = call.request.id;
	if (!id) return callback({ message: 'Blog id not defined.' }, null);

	const response = await deleteBlog(id);

	callback(null, response);
}

export { listBlogsService, getBlogByIdService, createBlogService, updateBlogService, deleteBlogService };
