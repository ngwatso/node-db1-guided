const express = require('express');
const Post = require('./post-model');

const router = express.Router();

async function checkId(req, res, next) {
	try {
		const post = await Post.getById(req.params.id);
		if (post) {
			req.post = post;
			next();
		} else {
			const err = new Error('id not found');
			err.statusCode = 404;
			next(err);
		}
	} catch (err) {
		err.statusCode = 500;
		next(err);
	}
}

function checkPayload(req, res, next) {
	const newPost = req.body;
	if (!newPost.title && !newPost.contents) {
		const err = new Error('body must include title, contents, or both');
		err.statusCode = 400;
		next(err);
	} else {
		next();
	}
}

router.get('/', async (req, res, next) => {
	try {
		const data = await Post.get();
		res.json(data);
	} catch (err) {
		next(err);
	}
});

router.get('/:id', checkId, (req, res) => {
	res.status(200).json(req.post);
});

router.post('/', checkPayload, async (req, res, next) => {
	try {
		const data = await Post.create(req.body);
		res.status(201).json(data);
	} catch (err) {
		next(err);
	}
});

router.put('/:id', checkPayload, checkId, async (req, res, next) => {
	try {
		const data = await Post.update(req.params.id, req.body);
		res.json(data);
	} catch (err) {
		next(err);
	}
});

router.delete('/:id', checkId, async (req, res, next) => {
	try {
		const data = await Post.remove(req.params.id);
		res.json(data);
	} catch (err) {
		next(err);
	}
});

router.use((err, req, res, next) => {
	err.statusCode = err.statusCode || 500;
	res.status(err.statusCode).json({
		message: err.message,
		stack: err.stack,
	});
});

module.exports = router;
