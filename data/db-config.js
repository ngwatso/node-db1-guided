const knex = require('knex');

const config = require('../knexfile.js');

const envToUse = process.env.NODE

module.exports = knex(config.development);
