import grpc from '@grpc/grpc-js';
import protoloader from '@grpc/proto-loader';
import { listBlogsService, getBlogByIdService, createBlogService, updateBlogService, deleteBlogService } from './services/blogs.js';
import path from 'path';

const blogsPackage = protoloader.loadSync(path.resolve('../common/proto/blog.proto'), {
	keepCase: true,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true,
});

const Blogs = grpc.loadPackageDefinition(blogsPackage).blog;

function main() {
	var server = new grpc.Server();

	server.addService(Blogs.BlogService.service, {
		ListBlogs: listBlogsService,
		GetBlog: getBlogByIdService,
		CreateBlog: createBlogService,
		UpdateBlog: updateBlogService,
		DeleteBlog: deleteBlogService,
	});

	server.bindAsync('0.0.0.0:3000', grpc.ServerCredentials.createInsecure(), (err, port) => {
		console.log(port);
		server.start();
	});
}

try {
	main();
} catch (e) {
	console.log(e);
}
