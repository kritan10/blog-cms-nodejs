import express from 'express';
import { blogsRouter } from './router.js';
import morgan from 'morgan';

var app = express();

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use(express.json());

app.use('/blog', blogsRouter);

app.get('/hello', (req, res) => {
	res.send('Hello ' + req.body.message);
});

app.listen(3000, () => {
	console.log('Server listening at port 3000');
});
