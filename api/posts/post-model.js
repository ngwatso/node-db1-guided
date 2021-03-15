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
  return db.raw(`SELECT * FROM posts WHERE id = ); // HORRIBLE
}

function create() {
  return Promise.resolve('create wired')
}

function update() {
  return Promise.resolve('update wired')
}

function remove() {
  return Promise.resolve('delete wired')
}
