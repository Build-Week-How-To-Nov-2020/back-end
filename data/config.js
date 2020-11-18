require("dotenv").config();
const dbenv = process.env.NODE_ENV || "development"

const knex = require('knex');

const knexConfig = require('../knexfile.js')[dbenv];

module.exports = knex(knexConfig);