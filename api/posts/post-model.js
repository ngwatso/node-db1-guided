const db = require('../../data/db-config.js');

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

function get() {
  // return db.raw(`SELECT * FROM posts LIMIT 3;`)
  // return db.select('*').table('posts')
  return db('posts')
}

function getById(id) {
  // return db.raw(`SELECT * FROM posts WHERE id = ?`, [id]);
  return db('posts').where('id', id).first()
}

function create(post) {
  // return db.raw(`
  //   insert into posts (title, contents)
  //   values ('foo', 'bar');
  // `)
  return db('posts').insert(post, ['id', 'title', 'contents'])
}

function update() {
  return Promise.resolve('update wired')
}

function remove() {
  return Promise.resolve('delete wired')
}
