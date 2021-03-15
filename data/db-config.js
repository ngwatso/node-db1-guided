const knex = require('knex');

const config = require('../knexfile.js');

const envToUse = process.env.NODE_ENV || 'development'

module.exports = knex(config[envToUse]);
