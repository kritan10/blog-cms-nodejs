import express from 'express';
import grpc from '@grpc/grpc-js';
import protoloader from '@grpc/proto-loader';
import path from 'path';

const blogsPackage = protoloader.loadSync(path.resolve('../common/proto/blog.proto'), {
	keepCase: true,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true,
});

const Blogs = grpc.loadPackageDefinition(blogsPackage).blog;
const client = new Blogs.BlogService('localhost:50051', grpc.credentials.createInsecure());

var router = express.Router();

router.get('/blogs', (req, res) => {
	const { page, perPageCount, tags } = req.body;
	client.ListBlogs({ page: page, perPageCount: perPageCount, tags: tags }, (err, response) => {
		if (err) return res.send(err);
		res.send(response);
	});
});

router.get('/:id', (req, res) => {
	const id = req.params.id;
	client.GetBlog({ id: id }, (err, response) => {
		if (err) return res.send(err);
		res.send(response);
	});
});

router.post('/blogs', (req, res) => {
	const { title, content, image } = req.body;

	client.CreateBlog({ title: title, content: content, image: image }, (err, response) => {
		if (err) return res.send(err);
		res.send(response);
	});
});

router.put('/:id', (req, res) => {
	const id = req.params.id;
	const { title, content, image } = req.body;

	client.UpdateBlog({ id: id, title: title, content: content, image: image }, (err, response) => {
		if (err) return res.send(err);
		res.send(response);
	});
});

router.delete('/:id', (req, res) => {
	const id = req.params.id;

	client.DeleteBlog({ id: id }, (err, response) => {
		if (err) return res.send(err);
		res.send(response);
	});
});

export { router as blogsRouter };
