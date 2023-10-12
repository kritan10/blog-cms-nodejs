import grpc from '@grpc/grpc-js';
import protoloader from '@grpc/proto-loader';
import {
	listBlogsService,
	getBlogByIdService,
	createBlogService,
	updateBlogService,
	deleteBlogService,
} from './server/services/blogs.js';

const blogsPackage = protoloader.loadSync('./server/proto/blog.proto', {
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

	server.bindAsync(
		'0.0.0.0:50051',
		grpc.ServerCredentials.createInsecure(),
		() => {
			server.start();
		}
	);
}

main();
