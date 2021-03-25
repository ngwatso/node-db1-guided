const db = require('../../data/db-config');

module.exports = {
	get,
	getById,
	create,
	update,
	remove,
};

async function get() {
	console.log(await db('posts').toString());
	// const sql = await db('posts').toString();
	// console.log(sql);
	return db('posts');
	// return Promise.resolve('get wired');
}

function getById(id) {
	const post = db.first('*').from('posts').where({ id });
	return post;
	// ** return Promise.reject('test-rejection)
	// return Promise.resolve('getById wired');
}

async function create(newPost) {
	const post = await db('posts').insert(newPost);
	return post;
	// return Promise.resolve('create wired');
}

function update(id, newData) {
	return db('posts').update(newData).where({ id });
	// return Promise.resolve('update wired');
}

function remove(id) {
	return db('posts').del().where({ id });
	// return Promise.resolve('delete wired');
}
